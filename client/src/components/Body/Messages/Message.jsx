import React from "react";
import { useAuthContext } from "../../../context/AuthContect";
import useConversation from "../../../zustand/useConversation";


const Message = ({message}) => {

  const { authState } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authState._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authState.profilePic : selectedConversation.profilePic;
  const bubbleBgColor = fromMe ? 'bg-[#3F72AF]' : "";
  const sendTime = `${new Date(message.createdAt).getHours()}:${new Date(message.createdAt).getMinutes().toString().padStart(2, '0')}`;

  return (
    <div className="">
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar hidden lg:block">
          <div className="w-10 rounded-full">
            <img
              alt="profilePic"
              src={profilePic}
            />
          </div>
        </div>
        <div className={`chat-bubble ${bubbleBgColor}`}>{message.message}</div>
        <time className="chat-footer opacity-50 tex-xs">{sendTime}</time>
      </div>
    </div>
  );
};

export default Message;
