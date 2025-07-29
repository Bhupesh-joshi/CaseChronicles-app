// import React from "react";
// import { FaBell } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";

// const DashboardHeader = () => {
//   const currentDate = new Date().toLocaleDateString("en-GB", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });

//   return (
//     <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm rounded-xl mb-6">
//       {/* Left: Welcome + Date */}
//       <div>
//         <h2 className="text-2xl font-semibold text-gray-800">Welcome back, Bhupesh! 👋</h2>
//         <p className="text-sm text-gray-500">{currentDate}</p>
//       </div>

//       {/* Right: Notifications + Profile */}
//       <div className="flex items-center space-x-6">
//         {/* Notification Icon */}
//         <button className="relative text-gray-600 hover:text-black">
//           <FaBell className="w-5 h-5" />
//           <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//         </button>

//         {/* Profile Avatar */}
//           <div className="relative cursor-pointer">
//             <FaUserCircle className="text-3xl text-gray-700" title="Profile" />
//           </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardHeader;



// import React from "react";
// import { FaBell, FaUserCircle } from "react-icons/fa";
// import useState from "react";


// const DashboardHeader = () => {
//   const currentDate = new Date().toLocaleDateString("en-GB", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });

//   const userName = localStorage.getItem("username") || "User";

//   const [showMenu, setShowMenu] = useState(false);

// const handleLogout = () => {
//   localStorage.removeItem("username");
//   // redirect to login
//   window.location.href = "/login";
// };


//   return (
//     <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm rounded-xl mb-6">
//       {/* Left: Welcome + Date */}
//       <div>
//         <h2 className="text-2xl font-semibold text-gray-800">
//           Welcome back, {userName}! 👋
//         </h2>
//         <p className="text-sm text-gray-500">{currentDate}</p>
//       </div>

//       {/* Right: Notifications + Profile */}
//       <div className="flex items-center space-x-6">
//         <button className="relative text-gray-600 hover:text-black">
//           <FaBell className="w-5 h-5" />
//           <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//         </button>

//         <div className="relative cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
//   <FaUserCircle className="text-3xl text-gray-700" title="Profile" />
//   {showMenu && (
//     <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-10">
//       <ul className="py-2">
//         <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View Profile</li>
//         <li
//           className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
//           onClick={handleLogout}
//         >
//           Logout
//         </li>
//       </ul>
//     </div>
//   )}
// </div>

//       </div>
//     </div>
//   );
// };

// export default DashboardHeader;


import React, { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const DashboardHeader = () => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const userName = localStorage.getItem("username") || "UserId - CC00917";
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("username");
    window.location.href = import.meta.env.BASE_URL;
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm rounded-xl mb-6">
      {/* Left: Welcome + Date */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome back, {userName} 👋
        </h2>
        <p className="text-sm text-gray-500">{currentDate}</p>
      </div>

      {/* Right: Notification + Profile */}
      <div className="flex items-center space-x-6">
        <button className="relative text-gray-600 hover:text-black">
          <FaBell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="relative cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
          <FaUserCircle className="text-3xl text-gray-700" title="Profile" />
          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                    >Go To Home</li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
