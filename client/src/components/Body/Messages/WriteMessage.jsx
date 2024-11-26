import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";

const WriteMessage = () => {
  return (
    <div className="flex items-center ">
      <AttachFileIcon className="cursor-pointer "  />
      <input
        type="text"
        className="grow px-3 py-2 rounded-xl focus:outline-[#DBE2EF] bg-[#F9F7F7] placeholder:text-[#313030]"
        placeholder="Type here..."
      />
      <div className="hidden lg:flex space-x-2 items-center">
        <SentimentSatisfiedAltIcon className="cursor-pointer ms-2" />
      </div>
      <SendIcon className="cursor-pointer ml-3" />
    </div>
  );
};

export default WriteMessage;
