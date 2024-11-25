import React from "react";
import Header from "../components/header/Header";
import Users from "../components/Body/Users/Users";
import Messages from "../components/Body/Messages/Messages";
import Profile from "../components/Body/Profile/Profile";

const Home = () => {
  return (
    <div
      className="border rounded size-5/6 flex flex-col"
      style={{ backgroundColor: "#F9F7F7" }}
    >
      <div className="header-information px-4 border-b">
        <Header />
      </div>
      <div className="body h-full grid grid-cols-12 ms-1 ps-2">
          <div className="col-span-3 border-r">
            <Users />
          </div>
          <div className="col-span-7 border-r ">
            <Messages />
          </div>
          <div className="col-span-2 ">
            <Profile />
          </div>
      </div>
    </div>
  );
};

export default Home;