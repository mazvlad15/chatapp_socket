import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="mt-5 p-2 flex items-center flex-col">
        <img
          className="rounded-full"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
        <h3 className="mt-2 text-lg font-semibold uppercase">Vlad Mazureac</h3>
        <span className="flex items-center opacity-75">
          <div className="bg-green-600 w-2 h-2 rounded-full me-1"></div>Active
          now
        </span>
      </div>
      <div className="flex flex-col mt-2 text-left">
          <div className="space-y-4">
            {/* First Name */}
            <div className="flex flex-col">
              <span className="font-medium">First Name</span>
              <span className="text-gray-600">John</span>
            </div>
            {/* Last Name */}
            <div className="flex flex-col">
              <span className="font-medium">Last Name</span>
              <span className="text-gray-600">Doe</span>
            </div>
            {/* Username */}
            <div className="flex flex-col">
              <span className="font-medium">Username</span>
              <span className="text-gray-600">johndoe</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
