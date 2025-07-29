import React from 'react';
import { FaClock } from 'react-icons/fa';

const activities = [
  { id: 1, message: "User A added a new case", time: "2 hrs ago" },
  { id: 2, message: "User B completed a task", time: "5 hrs ago" },
  { id: 3, message: "Admin approved a registration", time: "1 day ago" },
  { id: 4, message: "User C updated profile info", time: "2 days ago" },
];

const DashboardActivity = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Recent Activities</h2>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <FaClock className="text-gray-500 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-200">{activity.message}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardActivity;
