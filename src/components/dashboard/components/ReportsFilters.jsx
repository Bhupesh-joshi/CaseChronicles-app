import React, { useState } from "react";

const ReportsFilters = () => {
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    caseType: "",
    status: "",
    assignedTo: "",
    roleOrRegion: "",
    donationType: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFilters({
      fromDate: "",
      toDate: "",
      caseType: "",
      status: "",
      assignedTo: "",
      roleOrRegion: "",
      donationType: "",
    });
  };

  const handleApplyFilters = () => {
    console.log("Filters applied:", filters);
    // 👇 Yaha API call or data update logic ayega
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">🔍 Filters</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Date Range */}
        <div>
          <label className="text-sm font-medium text-gray-600">From</label>
          <input
            type="date"
            name="fromDate"
            value={filters.fromDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm mt-1"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">To</label>
          <input
            type="date"
            name="toDate"
            value={filters.toDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm mt-1"
          />
        </div>

        {/* Case Type */}
        <div>
          <label className="text-sm font-medium text-gray-600">Case Type</label>
          <select
            name="caseType"
            value={filters.caseType}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm mt-1"
          >
            <option value="">All</option>
            <option value="civil">Civil</option>
            <option value="criminal">Criminal</option>
            <option value="family">Family</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="text-sm font-medium text-gray-600">Case Status</label>
          <select
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm mt-1"
          >
            <option value="">All</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        {/* Assigned To */}
        <div>
          <label className="text-sm font-medium text-gray-600">Assigned To</label>
          <select
            name="assignedTo"
            value={filters.assignedTo}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm mt-1"
          >
            <option value="">All</option>
            <option value="volunteer">Volunteer</option>
            <option value="lawyer">Lawyer</option>
          </select>
        </div>

        {/* User Role / Region */}
        <div>
          <label className="text-sm font-medium text-gray-600">User Role / Region</label>
          <input
            type="text"
            name="roleOrRegion"
            value={filters.roleOrRegion}
            onChange={handleChange}
            placeholder="e.g. Admin, Bihar"
            className="w-full border rounded px-3 py-2 text-sm mt-1"
          />
        </div>

        {/* Donation Type */}
        <div>
          <label className="text-sm font-medium text-gray-600">Donation Type</label>
          <select
            name="donationType"
            value={filters.donationType}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm mt-1"
          >
            <option value="">All</option>
            <option value="financial">Financial</option>
            <option value="in-kind">In-Kind</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-end gap-2 mt-4">
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm"
        >
          Reset Filters
        </button>
        <button
          onClick={handleApplyFilters}
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default ReportsFilters;
