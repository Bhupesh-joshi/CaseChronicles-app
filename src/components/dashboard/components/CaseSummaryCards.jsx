import React from "react";
import { FaFolderOpen, FaClock, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

const summaryData = [
  {
    title: "Total Cases",
    count: 120,
    icon: <FaFolderOpen className="text-blue-600 text-2xl" />,
    bg: "bg-blue-100"
  },
  {
    title: "Pending Cases",
    count: 34,
    icon: <FaClock className="text-yellow-600 text-2xl" />,
    bg: "bg-yellow-100"
  },
  {
    title: "Completed Cases",
    count: 68,
    icon: <FaCheckCircle className="text-green-600 text-2xl" />,
    bg: "bg-green-100"
  },
  {
    title: "Cases This Month",
    count: 18,
    icon: <FaCalendarAlt className="text-purple-600 text-2xl" />,
    bg: "bg-purple-100"
  },
];

const CaseSummaryCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-6">
      {summaryData.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-4 p-4 rounded-xl shadow-sm ${item.bg}`}
        >
          <div className="p-3 bg-white rounded-full shadow">{item.icon}</div>
          <div>
            <p className="text-sm text-gray-600">{item.title}</p>
            <p className="text-xl font-semibold">{item.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseSummaryCards;
