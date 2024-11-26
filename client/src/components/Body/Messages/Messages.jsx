import React from "react";
import Message from "./Message";
import WriteMessage from "./WriteMessage";
import ScrollToBottom from "react-scroll-to-bottom";

const Messages = () => {
  return (
    <div className="h-full grid grid-rows-subgrid relative">
      
        <div className="messages overflow-auto row-span-12 p-5 mb-5 space-y-3">
          {/* Lista mesajelor */}
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />

          
        </div>
      {/* WriteMessage fixat jos */}
      <div className=" absolute bottom-0 w-full p-2 bg-[#F9F7F7]">
        <WriteMessage />
      </div>
    </div>
  );
};

export default Messages;
