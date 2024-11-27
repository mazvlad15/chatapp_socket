import React from "react";
import useConversation from "../../../zustand/useConversation";
import { useSocketContext } from "../../../context/SocketContext";

const User = ({ user, lastMessage }) => {
  const { selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  const sendTime = lastMessage && lastMessage.createdAt
    ? `${new Date(lastMessage.createdAt).getHours()}:${new Date(lastMessage.createdAt).getMinutes().toString().padStart(2, '0')}`
    : null; 

  return (
    <div
      className={`flex items-center hover:bg-[#112D4E] hover:text-[#F9F7F7] rounded cursor-pointer p-3 ${
        isSelected && "bg-[#112D4E] text-[#F9F7F7]"
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className={`avatar ${isOnline ? "online" : "offline"} flex`}>
        <div className="w-14 rounded-full ">
          <img src={user.profilePic} />
        </div>
      </div>
      <div className="ms-2 hidden md:block">
        <h3 className="font-bold">{user.fullName}</h3>
        <p className="hidden lg:block">{lastMessage?.message}</p>
      </div>
      <div className="ms-auto hidden lg:block">
        {sendTime && <p className="text-xs">{sendTime}</p>}
      </div>
    </div>
  );
};

export default User;
