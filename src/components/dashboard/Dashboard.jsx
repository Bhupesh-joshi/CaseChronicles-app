// import Sidebar from './components/Sidebar'

// const Footer = () => {
//   return (
//     <div>
//       <Sidebar />
//     </div>
    
//   );
// };

// export default Footer;


// components/dashboard/Dashboard.jsx
// import Sidebar from "./components/Sidebar";
// import { Outlet } from "react-router-dom";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container flex">
//       <Sidebar />
//       <div className="dashboard-content w-full p-4">
//         <Outlet /> {/* This will render DashboardHome or other pages */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// components/dashboard/Dashboard.jsx

import React from 'react';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {

  useEffect(() => {
    // Force Tailwind to re-check responsive layout
    const triggerResize = () => {
      window.dispatchEvent(new Event("resize"));
    };
    triggerResize();
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-x-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
