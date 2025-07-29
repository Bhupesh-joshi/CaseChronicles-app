import React from "react";
import { FaFileAlt, FaUsers, FaPlusCircle, FaCog, FaChartBar } from "react-icons/fa";

const getIcon = (title) => {
  switch (title) {
    case "All Cases":
      return <FaFileAlt className="text-blue-500 text-xl mr-2" />;
    case "Add Case":
      return <FaPlusCircle className="text-green-500 text-xl mr-2" />;
    case "Users":
      return <FaUsers className="text-purple-500 text-xl mr-2" />;
    case "Reports":
      return <FaChartBar className="text-pink-500 text-xl mr-2" />;
    case "Settings":
      return <FaCog className="text-gray-600 text-xl mr-2" />;
    default:
      return null;
  }
};

const Header = ({ title, subtitle }) => {
  return (
    <header className="w-full bg-white shadow-md px-6 py-5 mb-6 rounded-xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center">
          {getIcon(title)}
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
            {subtitle && (
              <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
