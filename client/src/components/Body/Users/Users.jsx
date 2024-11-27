import React, { useState } from "react";
import Search from "./Search";
import User from "./User";
import useGetAllUsers from "../../../hooks/useGetAllUsers";
import CircularProgress from "@mui/material/CircularProgress";

const Users = () => {
  const { loadingUsers, users, error } = useGetAllUsers();
  const [searchTerm, setSearchTerm] = useState(""); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); 
  };

  
  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="mt-4 p-2">
      <div className="search">

        <Search onSearchChange={handleSearchChange} />
      </div>
      <div className="users overflow-auto max-h-[480px] mt-2">
        {loadingUsers && <CircularProgress />}
        {filteredUsers.map((user) => (
          <User key={user._id} user={user} />
        ))}
        {!loadingUsers && filteredUsers.length === 0 && (
          <p className="text-center text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Users;
