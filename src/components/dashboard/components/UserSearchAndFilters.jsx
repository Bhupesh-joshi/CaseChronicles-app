import React, { useState } from "react";

const UserSearchAndFilters = ({ onSearch, onFilterChange }) => {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    role: "",
    status: "",
    date: "",
  });

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    onSearch && onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange && onFilterChange(updatedFilters);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-white rounded-md shadow-sm">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name, email or ID"
        className="flex-1 min-w-[200px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchText}
        onChange={handleInputChange}
      />

      {/* Role Filter */}
      <select
        name="role"
        value={filters.role}
        onChange={handleFilterChange}
        className="border border-gray-300 rounded-md px-3 py-2 min-w-[150px]"
      >
        <option value="">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="Manager">Manager</option>
        <option value="Volunteer">Volunteer</option>
      </select>

      {/* Status Filter */}
      <select
        name="status"
        value={filters.status}
        onChange={handleFilterChange}
        className="border border-gray-300 rounded-md px-3 py-2 min-w-[150px]"
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      {/* Date Filter */}
      <input
        type="date"
        name="date"
        value={filters.date}
        onChange={handleFilterChange}
        className="border border-gray-300 rounded-md px-3 py-2"
      />
    </div>
  );
};

export default UserSearchAndFilters;
