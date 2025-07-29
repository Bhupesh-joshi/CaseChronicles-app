import React, { useState } from 'react';

const initialData = [
  {
    id: 'C001',
    title: 'Property Dispute',
    status: 'Completed',
    date: '2025-07-20',
    assignedTo: 'Adv. Sharma',
  },
  {
    id: 'C002',
    title: 'Consumer Complaint',
    status: 'Pending',
    date: '2025-07-18',
    assignedTo: 'Adv. Joshi',
  },
  {
    id: 'C003',
    title: 'Criminal Case',
    status: 'In Progress',
    date: '2025-07-15',
    assignedTo: 'Adv. Mehra',
  },
];

const RecentCasesTable = () => {
  const [data, setData] = useState(initialData);
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredData =
    filterStatus === 'All'
      ? data
      : data.filter((item) => item.status === filterStatus);

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Recent Cases</h2>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border p-2 rounded text-sm dark:bg-gray-700 dark:text-white"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
          <option>In Progress</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white">
              <th className="p-3">Case ID</th>
              <th className="p-3">Title</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date Created</th>
              <th className="p-3">Assigned To</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((caseItem) => (
              <tr key={caseItem.id} className="border-b dark:border-gray-700">
                <td className="p-3">{caseItem.id}</td>
                <td className="p-3">{caseItem.title}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      caseItem.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : caseItem.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {caseItem.status}
                  </span>
                </td>
                <td className="p-3">{caseItem.date}</td>
                <td className="p-3">{caseItem.assignedTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredData.length === 0 && (
          <div className="text-center py-4 text-gray-500">No data found.</div>
        )}
      </div>
    </div>
  );
};

export default RecentCasesTable;
