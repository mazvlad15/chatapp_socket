import React from "react";

const NoChatSelected = ({ userName }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-xl">
          Welcome, <span style={{ color: "#3F72AF" }}>{userName}</span>!{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
          <br />
          Select the chat and communicate with anyone.
        </h1>
      </div>
    </div>
  );
};

export default NoChatSelected;
