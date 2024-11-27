import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";


export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
        senderId,
        receiverId,
        message,
    })

    if(newMessage){
        conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);
    if(receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error (sendMessage)" });
  }
};


export const getMessage = async (req, res) => {
    try {
        
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        }).populate("messages")

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
      console.log(error)
        res.status(500).json({ error: "Internal Server error (getMessage)" });
    }
}

export const getAllConversationsWithMessages = async (req, res) => {
  try {
    const senderId = req.user._id;

    const conversations = await Conversation.find({
      participants: senderId,
    }).populate("messages");

    if (!conversations || conversations.length === 0) {
      return res.status(200).json([]);
    }


    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error (getAllConversationsWithMessages)" });
  }
};
