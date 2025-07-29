import React from 'react';
import { FaPlusCircle, FaFileAlt, FaUserPlus, FaFolderOpen } from 'react-icons/fa';

const actions = [
  {
    id: 1,
    label: 'Add New Case',
    icon: <FaPlusCircle className="text-white text-xl" />,
    onClick: () => alert('Add New Case Clicked'),
  },
  {
    id: 2,
    label: 'Generate Report',
    icon: <FaFileAlt className="text-white text-xl" />,
    onClick: () => alert('Generate Report Clicked'),
  },
  {
    id: 3,
    label: 'Add User',
    icon: <FaUserPlus className="text-white text-xl" />,
    onClick: () => alert('Add User Clicked'),
  },
  {
    id: 4,
    label: 'View Documents',
    icon: <FaFolderOpen className="text-white text-xl" />,
    onClick: () => alert('View Documents Clicked'),
  },
];

const DashboardQuickActions = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Quick Actions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={action.onClick}
            className="flex flex-col items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-4 transition"
          >
            {action.icon}
            <span className="text-sm font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardQuickActions;
