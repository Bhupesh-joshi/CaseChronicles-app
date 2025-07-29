import React, { useEffect, useState } from 'react';
import { FaChartLine, FaDonate, FaUsers, FaUserPlus, FaFolderOpen, FaFolder, FaFolderMinus } from 'react-icons/fa';

const mockData = {
  totalCases: 540,
  activeCases: 220,
  closedCases: 320,
  totalDonations: 120000,
  totalUsers: 102,
  newUsersThisMonth: 12,
};

const formatCurrency = (amount) => `₹${amount.toLocaleString()}`;

const SummaryCard = ({ icon, label, value }) => (
  <div className="bg-white shadow-md rounded-2xl p-4 flex items-center gap-4 w-full sm:w-auto">
    <div className="text-blue-600 text-3xl">{icon}</div>
    <div>
      <div className="text-gray-600 text-sm font-semibold">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  </div>
);

const SummaryStats = ({ filters }) => {
  const [data, setData] = useState(mockData);

  useEffect(() => {
    // Future scope: Fetch filtered data from API
    // For now, simulate update with static data
    setData(mockData);
  }, [filters]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <SummaryCard icon={<FaFolder />} label="Total Cases" value={data.totalCases} />
      <SummaryCard icon={<FaFolderOpen />} label="Active Cases" value={data.activeCases} />
      <SummaryCard icon={<FaFolderMinus />} label="Closed Cases" value={data.closedCases} />
      <SummaryCard icon={<FaDonate />} label="Total Donations" value={formatCurrency(data.totalDonations)} />
      <SummaryCard icon={<FaUsers />} label="Total Users" value={data.totalUsers} />
      <SummaryCard icon={<FaUserPlus />} label="New Users This Month" value={data.newUsersThisMonth} />
    </div>
  );
};

export default SummaryStats;
