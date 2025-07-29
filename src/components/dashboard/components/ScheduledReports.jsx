// 📁 ScheduledReports.jsx
import React, { useState } from "react";

const ScheduledReports = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const reports = [
    {
      id: 1,
      scheduleDate: "2025-08-01",
      frequency: "Weekly",
      email: "admin@example.com",
    },
    {
      id: 2,
      scheduleDate: "2025-08-10",
      frequency: "Monthly",
      email: "stakeholder@ngo.org",
    },
  ];

  const filteredReports = reports.filter((report) =>
    report.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">📅 Scheduled Reports</h2>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search by email..."
        className="mb-4 px-3 py-2 border rounded-md w-full md:w-1/3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 📋 Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Schedule Date</th>
              <th className="px-4 py-2 border">Frequency</th>
              <th className="px-4 py-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center px-4 py-4 text-gray-500">
                  No scheduled reports found.
                </td>
              </tr>
            ) : (
              filteredReports.map((report) => (
                <tr key={report.id} className="border-b">
                  <td className="px-4 py-2">{report.scheduleDate}</td>
                  <td className="px-4 py-2">{report.frequency}</td>
                  <td className="px-4 py-2">{report.email}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduledReports;
