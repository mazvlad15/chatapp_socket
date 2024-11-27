import React, { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import useSendMessage from "../../../hooks/useSendMessage";
import { CircularProgress } from "@mui/material";

const WriteMessage = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage, error } = useSendMessage();

  const sendMessageHandle = async () => {
    if (!message) return;
    await sendMessage(message);
    setMessage("");
    console.log(error);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Previne comportamentul implicit al Enter
      sendMessageHandle(); // Invocarea corectă a funcției
    }
  };

  return (
    <div className="flex items-center">
      <AttachFileIcon className="cursor-pointer" />
      <input
        type="text"
        className="grow px-3 py-2 rounded-xl focus:outline-[#DBE2EF] bg-[#F9F7F7] placeholder:text-[#313030]"
        placeholder="Type here..."
        value={message}
        onKeyDown={handleKeyDown}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="hidden lg:flex space-x-2 items-center">
        <SentimentSatisfiedAltIcon className="cursor-pointer ms-2" />
      </div>
      {loading ? (
        <CircularProgress />
      ) : (
        <SendIcon className="cursor-pointer ml-3" onClick={sendMessageHandle} />
      )}
    </div>
  );
};

export default WriteMessage;
