import { useState, useEffect } from "react";

export default function SystemLogs() {
  const [logs, setLogs] = useState([]);

  // Dummy logs for now (replace with real API in future)
  useEffect(() => {
    const dummyLogs = [
      {
        id: 1,
        user: "admin",
        action: "Logged in",
        timestamp: "2025-07-26 09:00 AM",
      },
      {
        id: 2,
        user: "editor",
        action: "Updated profile info",
        timestamp: "2025-07-25 04:22 PM",
      },
      {
        id: 3,
        user: "admin",
        action: "Changed settings",
        timestamp: "2025-07-24 11:15 AM",
      },
    ];
    setLogs(dummyLogs);
  }, []);

  return (
    <div className="w-full border p-4 rounded-2xl shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <i className="fa fa-history text-blue-600"></i>
        System Logs
      </h2>

      {logs.length === 0 ? (
        <p className="text-gray-500">No logs available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">User</th>
                <th className="py-2 px-4 border-b">Action</th>
                <th className="py-2 px-4 border-b">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{log.user}</td>
                  <td className="py-2 px-4 border-b">{log.action}</td>
                  <td className="py-2 px-4 border-b">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
