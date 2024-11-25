import React from "react";
import Message from "./Message";
import WriteMessage from "./WriteMessage";
import ScrollToBottom from "react-scroll-to-bottom";

const Messages = () => {
  return (
    <ScrollToBottom >
      <div className="flex flex-col h-full">
        <div className="messages overflow-auto m-2 p-2 max-h-[430px]">
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
        <div className="mt-auto mb-3 border-t">
          <WriteMessage />
        </div>
      </div>
    </ScrollToBottom>
  );
};

export default Messages;
