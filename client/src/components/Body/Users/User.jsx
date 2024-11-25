import React from "react";

const User = () => {
  return (
    <div className="flex relative items-center hover:bg-[#112D4E] hover:text-[#F9F7F7] rounded cursor-pointer p-3">
      <div className="avatar online">
        <div className="w-14 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="ms-2">
        <h3 className="font-bold">Vlad Mazureac</h3>
        <p>Last message</p>
      </div>
      <div className="ms-auto">
        <p className="text-xs">18:40</p>
      </div>
    </div>
  );
};

export default User;