import React from "react";
import { FaBullhorn } from "react-icons/fa";

const announcements = [
  {
    id: 1,
    title: "🚨 System Maintenance Scheduled",
    date: "July 21, 2025",
    message: "Our servers will be under maintenance from 12 AM to 4 AM. Please save your work.",
  },
  {
    id: 2,
    title: "🎉 New Feature: Case Status Tracker",
    date: "July 18, 2025",
    message: "Now track the progress of all cases in real-time from the dashboard.",
  },
  {
    id: 3,
    title: "📢 Reminder: Complete Monthly Reports",
    date: "July 15, 2025",
    message: "All admins are requested to submit their monthly activity reports before 25th.",
  },
];

const DashboardAnnouncements = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaBullhorn className="text-yellow-500" /> Announcements
        </h2>
        <button className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700">
          View All
        </button>
      </div>

      <ul className="space-y-4">
        {announcements.map(({ id, title, date, message }) => (
          <li key={id} className="border-l-4 border-blue-500 pl-4">
            <p className="text-lg font-medium text-gray-800">{title}</p>
            <p className="text-sm text-gray-500 mb-1">{date}</p>
            <p className="text-sm text-gray-700">{message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardAnnouncements;
