import React from "react";
import useConversation from "../../../zustand/useConversation";
import { useAuthContext } from "../../../context/AuthContect";

const User = ({ user, lastMessage }) => {
  const { selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === user._id;

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
      <div className="avatar online flex">
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
