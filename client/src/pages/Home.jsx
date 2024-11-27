import React, { useEffect } from "react";
import Header from "../components/header/Header";
import Users from "../components/Body/Users/Users";
import Messages from "../components/Body/Messages/Messages";
import Profile from "../components/Body/Profile/Profile";
import NoChatSelected from "../components/Body/NoChatSelected";
import useConversation from "../zustand/useConversation";

const Home = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div
      className="border rounded grid grid-rows-12 h-full w-full "
      style={{ backgroundColor: "#F9F7F7" }}
    >
      <div className="border-b">
        <div className="header row-span-1 mx-5">
          <Header />
        </div>
      </div>
      <div className="body row-span-11 mx-5">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-3 border-r">
            <Users />
          </div>
          {selectedConversation ? (
            <>
              <div className="lg:col-span-7 col-span-9">
                <Messages />
              </div>
              <div className="col-span-2 hidden lg:block border-l">
                <Profile />
              </div>
            </>
          ) : (
            <div className="col-span-9">
              <NoChatSelected />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
