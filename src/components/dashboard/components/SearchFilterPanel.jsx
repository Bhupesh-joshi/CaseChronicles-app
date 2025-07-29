// import React from "react";
// import { FaSearch } from "react-icons/fa";

// const SearchFilterPanel = () => {
//   return (
//     <div className="bg-white p-4 rounded-xl shadow-md w-full">
//       {/* Search Input */}
//       <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-4">
//         {/* Search */}
//         <div className="relative w-full md:w-1/2">
//           <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search by Case ID, Title, or Client Name"
//             className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Filters */}
//         <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
//           {/* Status */}
//           <select className="w-full md:w-40 border px-3 py-2 rounded-md focus:outline-none">
//             <option value="">Status</option>
//             <option value="Pending">Pending</option>
//             <option value="InProgress">In Progress</option>
//             <option value="Closed">Closed</option>
//           </select>

//           {/* Date Range */}
//           <input
//             type="date"
//             className="w-full md:w-40 border px-3 py-2 rounded-md focus:outline-none"
//           />

//           {/* Assigned User / Advocate */}
//           <select className="w-full md:w-40 border px-3 py-2 rounded-md focus:outline-none">
//             <option value="">Assigned Advocate</option>
//             <option value="Advocate 1">Advocate 1</option>
//             <option value="Advocate 2">Advocate 2</option>
//           </select>

//           {/* Case Type */}
//           <select className="w-full md:w-40 border px-3 py-2 rounded-md focus:outline-none">
//             <option value="">Case Type</option>
//             <option value="Civil">Civil</option>
//             <option value="Criminal">Criminal</option>
//             <option value="Family">Family</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchFilterPanel;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

// Dummy cases data
const dummyCases = [
  {
    id: "C001",
    title: "Land Dispute",
    client: "Rahul Sharma",
    status: "Pending",
    date: "2025-07-01",
    advocate: "Advocate 1",
    type: "Civil",
  },
  {
    id: "C002",
    title: "Divorce Settlement",
    client: "Anjali Verma",
    status: "Closed",
    date: "2025-06-15",
    advocate: "Advocate 2",
    type: "Family",
  },
  {
    id: "C003",
    title: "Theft Case",
    client: "Vikram Singh",
    status: "InProgress",
    date: "2025-07-10",
    advocate: "Advocate 1",
    type: "Criminal",
  },
];

const SearchFilterPanel = () => {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    status: "",
    date: "",
    advocate: "",
    type: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Filter logic
  const filteredCases = dummyCases.filter((caseItem) => {
    const matchesSearch =
      caseItem.id.toLowerCase().includes(searchText.toLowerCase()) ||
      caseItem.title.toLowerCase().includes(searchText.toLowerCase()) ||
      caseItem.client.toLowerCase().includes(searchText.toLowerCase());

    const matchesStatus = filters.status
      ? caseItem.status === filters.status
      : true;
    const matchesDate = filters.date
      ? caseItem.date === filters.date
      : true;
    const matchesAdvocate = filters.advocate
      ? caseItem.advocate === filters.advocate
      : true;
    const matchesType = filters.type ? caseItem.type === filters.type : true;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesDate &&
      matchesAdvocate &&
      matchesType
    );
  });

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-4 mb-6">
        {/* Search */}
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by Case ID, Title, or Client Name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
          <select
            name="status"
            onChange={handleFilterChange}
            className="w-full md:w-40 border px-3 py-2 rounded-md"
          >
            <option value="">Status</option>
            <option value="Pending">Pending</option>
            <option value="InProgress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>

          <input
            type="date"
            name="date"
            onChange={handleFilterChange}
            className="w-full md:w-40 border px-3 py-2 rounded-md"
          />

          <select
            name="advocate"
            onChange={handleFilterChange}
            className="w-full md:w-40 border px-3 py-2 rounded-md"
          >
            <option value="">Assigned Advocate</option>
            <option value="Advocate 1">Advocate 1</option>
            <option value="Advocate 2">Advocate 2</option>
          </select>

          <select
            name="type"
            onChange={handleFilterChange}
            className="w-full md:w-40 border px-3 py-2 rounded-md"
          >
            <option value="">Case Type</option>
            <option value="Civil">Civil</option>
            <option value="Criminal">Criminal</option>
            <option value="Family">Family</option>
          </select>
        </div>
      </div>

      {/* Filtered Results */}
      <div className="grid gap-4">
        {filteredCases.length === 0 ? (
          <p className="text-gray-500 text-center">No cases found.</p>
        ) : (
          filteredCases.map((c) => (
            <div
              key={c.id}
              className="border p-4 rounded-md bg-gray-50 hover:bg-gray-100 transition"
            >
              <h2 className="font-semibold text-lg">{c.title}</h2>
              <p className="text-sm text-gray-600">
                <strong>Client:</strong> {c.client}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Status:</strong> {c.status}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Type:</strong> {c.type}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Advocate:</strong> {c.advocate}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Date:</strong> {c.date}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchFilterPanel;
