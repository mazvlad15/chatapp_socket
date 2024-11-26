import React from "react";
import Search from "./Search";
import User from "./User";
import LogoutIcon from '@mui/icons-material/Logout';

const Users = () => {
  return (
    <div className="mt-4 p-2 ">
      <div className="search ">
        <Search />
      </div>
      <div className="users overflow-auto max-h-[480px]  mt-2"> 
        <User />
        <User />
        <User />
        <User />
        <User />
        <User /><User />
        <User />
      </div>
      <div className="">
      <LogoutIcon className="-rotate-180 mt-5 cursor-pointer "/>
      </div>
    </div>
  );
};

export default Users;
