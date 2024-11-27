import React from "react";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useAuthContext } from "../../context/AuthContect";

const NoChatSelected = () => {

  const {authState} = useAuthContext();

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-xl">
          Welcome, <span className="text-[#3F72AF]">{authState.fullName}</span>!{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
          <br />
          Select the chat and communicate with anyone. 
          <ChatBubbleOutlineIcon />
        </h1>
      </div>
    </div>
  );
};

export default NoChatSelected;
