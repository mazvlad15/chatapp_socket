import React from "react";
import useConversation from "../../../zustand/useConversation";
import { useAuthContext } from "../../../context/AuthContect";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation, messages} = useConversation();
  const { authState } = useAuthContext();
  const isMe = authState._id === user._id;
  const isSelected = selectedConversation?._id === user._id;
  const lastMessage = messages[messages.length-1];


  return (
    <div
      className={`flex items-center hover:bg-[#112D4E] hover:text-[#F9F7F7] rounded cursor-pointer p-3 ${
        isSelected && "bg-[#112D4E] text-[#F9F7F7]"
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="avatar online flex">
        <div className="w-14 rounded-full ">
          <img src={isMe ? "saved_message_icon.png" : user.profilePic} />
        </div>
      </div>
      <div className="ms-2 hidden md:block">
        <h3 className="font-bold">{ isMe ? "Saved Messages" : user.fullName}</h3>
        <p className="hidden lg:block">{lastMessage?.message || ""}</p>
      </div>
      <div className="ms-auto hidden lg:block">
        <p className="text-xs">18:40</p>
      </div>
    </div>
  );
};

export default User;
