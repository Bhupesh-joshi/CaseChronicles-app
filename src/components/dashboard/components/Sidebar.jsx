// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaHome,
//   FaFolder,
//   FaPlus,
//   FaUsers,
//   FaChartBar,
//   FaCog,
//   FaSignOutAlt,
//   FaBars,
// } from "react-icons/fa";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     // { to: "/dashboard/home", icon: <FaHome />, label: "Dashboard" },
//     { to: "/dashboard", icon: <FaHome />, label: "Dashboard", exact: true },
//     { to: "/dashboard/cases", icon: <FaFolder />, label: "All Cases" },
//     { to: "/dashboard/add", icon: <FaPlus />, label: "Add Case" },
//     { to: "/dashboard/users", icon: <FaUsers />, label: "Users" },
//     { to: "/dashboard/reports", icon: <FaChartBar />, label: "Reports" },
//     { to: "/dashboard/settings", icon: <FaCog />, label: "Settings" },
//     { to: "/logout", icon: <FaSignOutAlt />, label: "Logout", logout: true },
//   ];

//   return (
//     <div className="max-w-8xl mx-auto">
//       {/* Mobile Toggle Button */}
//       <div className="md:hidden bg-[var(--white-color)] px-4 py-3 shadow-sm flex justify-between items-center">
//         <button onClick={() => setIsOpen(!isOpen)}>
//           <FaBars className="text-2xl text-[var(--main-color-blue)]" />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 z-40 h-full w-64 bg-[var(--white-color)] shadow-md transform transition-transform duration-300 md:translate-x-0 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:static md:block`}
//       >
//         <div className="h-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 flex flex-col">
//           <nav className="flex flex-col gap-3 text-[var(--gray-color-navlink)] font-[Roboto] text-base">
//             {navItems.map(({ to, icon, label, logout }, index) => (
//               <NavLink
//                 key={index}
//                 to={to}
//                 className={({ isActive }) =>
//                   `flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200 ${
//                     logout
//                       ? "text-[var(--red-500)] hover:bg-red-100"
//                       : isActive
//                       ? "bg-[var(--blue-100)] text-[var(--main-color-blue)] font-semibold"
//                       : "hover:bg-[var(--gray-100)]"
//                   }`
//                 }
//               >
//                 {icon}
//                 <span>{label}</span>
//               </NavLink>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFolder,
  FaPlus,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); // collapsed by default

  const handleLogout = () => {
    localStorage.removeItem("username"); // Or any token/session key
    window.location.href = "/"; // Redirect to home page
  };

  const navItems = [
    { to: "/dashboard", icon: <FaHome />, label: "Dashboard" },
    { to: "/dashboard/all-cases", icon: <FaFolder />, label: "All Cases" },
    { to: "/dashboard/add-case", icon: <FaPlus />, label: "Add Case" },
    { to: "/dashboard/users", icon: <FaUsers />, label: "Users" },
    { to: "/dashboard/reports", icon: <FaChartBar />, label: "Reports" },
    { to: "/dashboard/settings", icon: <FaCog />, label: "Settings" },
    // { to: "/dashboard/logout", icon: <FaSignOutAlt />, label: "Logout", logout: true },
  ];

  return (
    <div
      className={`h-auto relative top-0 left-0 z-40 bg-[var(--white-color)] shadow-md transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"
        }`}
    >
      <div className="sticky top-0">
        {/* Toggle Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsCollapsed(!isCollapsed)}>
            <FaBars className="text-xl text-[var(--main-color-blue)]" />
          </button>
        </div>

        {/* Navigation Items */}
        {/* <nav className="flex flex-col gap-2 px-2">
        {navItems.map(({ to, icon, label, logout }, index) => (
          <NavLink
            key={index}
            to={to}
            end={to === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center ${
                isCollapsed ? "justify-center" : "justify-start"
              } gap-3 px-4 py-3 rounded-lg transition duration-200 text-[var(--gray-color-navlink)] font-[Roboto] text-base ${
                logout
                  ? "text-[var(--red-500)] hover:bg-red-100"
                  : isActive
                  ? "bg-[var(--blue-100)] text-[var(--main-color-blue)] font-semibold"
                  : "hover:bg-[var(--gray-100)]"
              }`
            }
          >
            {icon}
            {!isCollapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav> */}
        <nav className="flex flex-col gap-2 px-2">
          {navItems.map(({ to, icon, label }, index) => (
            <NavLink
              key={index}
              to={to}
              end={to === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center ${isCollapsed ? "justify-center" : "justify-start"
                } gap-3 px-4 py-3 rounded-lg transition duration-200 text-[var(--gray-color-navlink)] font-[Roboto] text-base ${isActive
                  ? "bg-[var(--blue-100)] text-[var(--main-color-blue)] font-semibold"
                  : "hover:bg-[var(--gray-100)]"
                }`
              }
            >
              {icon}
              {!isCollapsed && <span>{label}</span>}
            </NavLink>
          ))}

          {/* 🔴 Logout Button */}
          <button
            onClick={handleLogout}
            className={`flex items-center cursor-pointer ${isCollapsed ? "justify-center" : "justify-start"
              } gap-3 px-4 py-3 rounded-lg transition duration-200 text-[var(--red-500)] hover:bg-red-100`}
          >
            <FaSignOutAlt />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </nav>

      </div>
    </div>
  );
};

export default Sidebar;