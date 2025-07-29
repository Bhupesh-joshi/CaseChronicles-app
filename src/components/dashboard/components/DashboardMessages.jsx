import React from "react";
import { FaEnvelopeOpenText, FaUserCircle } from "react-icons/fa";

const messages = [
  {
    id: 1,
    name: "Ananya Sharma",
    message: "I need help with my login issue...",
    time: "2 hours ago",
  },
  {
    id: 2,
    name: "Rahul Verma",
    message: "Case #1234 has some missing documents.",
    time: "Yesterday",
  },
  {
    id: 3,
    name: "Tannu Joshi",
    message: "Thanks for your quick response!",
    time: "2 days ago",
  },
];

const DashboardMessages = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaEnvelopeOpenText /> Messages / Support
        </h2>
        <button className="text-sm bg-green-600 text-white px-3 py-1.5 rounded hover:bg-green-700">
          View All
        </button>
      </div>

      <ul className="space-y-4">
        {messages.map(({ id, name, message, time }) => (
          <li key={id} className="flex items-start gap-4 border-b pb-3">
            <FaUserCircle className="text-3xl text-gray-400" />
            <div>
              <p className="font-medium text-gray-800">{name}</p>
              <p className="text-sm text-gray-600">{message}</p>
              <p className="text-xs text-gray-400 mt-1">{time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardMessages;
