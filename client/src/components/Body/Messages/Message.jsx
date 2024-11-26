import React from "react";

const Message = () => {
  return (
    <div>
      <div className="chat chat-start mb-4">
        <div className="chat-image avatar hidden lg:block">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-bubble ">You were the Chosen One  were the Chosen were the Chosen!</div>
        <time className="chat-footer opacity-50 tex-xs">12:45</time>
      </div>
    </div>
  );
};

export default Message;
