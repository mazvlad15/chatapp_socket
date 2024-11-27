import React, { useState } from "react";
import Search from "./Search";
import User from "./User";
import useGetAllUsers from "../../../hooks/useGetAllUsers";
import CircularProgress from "@mui/material/CircularProgress";
import useGetLastMessage from "../../../hooks/useGetLastMessage";

const Users = () => {
  const { loadingUsers, users, error } = useGetAllUsers();
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, lastMessages } = useGetLastMessage();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(searchTerm)
  );

  const getLastMessageForUser = (userId) => {
    const lastMessage = lastMessages.find((conversation) =>
      conversation.participants.includes(userId)
    );

    if (lastMessage && lastMessage.messages.length > 0) {
      const lastMessageDetails = lastMessage.messages[lastMessage.messages.length - 1]; 
      const message = lastMessageDetails.message;
      const createdAt = lastMessageDetails.createdAt;

      
      return {
        message,
        createdAt,
      };
    } else {
      return null; 
    }
  };

  return (
    <div className="mt-4 p-2">
      <div className="search">
        <Search onSearchChange={handleSearchChange} />
      </div>
      <div className="users overflow-auto max-h-[480px] mt-2">
        {loadingUsers && <CircularProgress />}
        {filteredUsers.map((user) => {
          const lastMessage = getLastMessageForUser(user._id);
          return <User key={user._id} user={user} lastMessage={lastMessage}/>;
        })}
        {!loadingUsers && filteredUsers.length === 0 && (
          <p className="text-center text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Users;
