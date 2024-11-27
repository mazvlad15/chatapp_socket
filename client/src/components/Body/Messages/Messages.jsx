import React from "react";
import Message from "./Message";
import WriteMessage from "./WriteMessage";
import ScrollToBottom from "react-scroll-to-bottom";
import useGetMessages from "../../../hooks/useGetMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton";

const Messages = () => {
  const { loading, errorM, messages } = useGetMessages();

  return (
    <div className="h-full grid grid-rows-subgrid relative">
      <ScrollToBottom className={`messages overflow-auto row-span-12 p-5 mb-5 space-y-3`}>
        {!loading && !errorM && messages.length > 0 && messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
        {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
        {errorM && (
          <div className="flex items-center justify-center text-red-500">
            Error to receive messages
          </div>
        )}
        {!loading && !errorM && messages.length === 0 && (
          <div className="text-center text-lg">
            Send a message to start the conversation
          </div>
        )}
      </ScrollToBottom>
      <div className="absolute bottom-0 w-full p-2 bg-[#F9F7F7]">
        <WriteMessage />
      </div>
    </div>
  );
};

export default Messages;
