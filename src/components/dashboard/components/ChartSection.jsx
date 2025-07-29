import React from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#facc15", "#ef4444", "#8b5cf6"];

const casesOverTimeData = [
  { month: "Jan", cases: 30 },
  { month: "Feb", cases: 45 },
  { month: "Mar", cases: 60 },
  { month: "Apr", cases: 50 },
  { month: "May", cases: 70 },
];

const casesByStatusData = [
  { name: "Open", value: 200 },
  { name: "Closed", value: 150 },
  { name: "In Progress", value: 90 },
];

const casesByTypeData = [
  { type: "Domestic Violence", count: 120 },
  { type: "Child Welfare", count: 80 },
  { type: "Financial Aid", count: 100 },
];

const donationsOverTimeData = [
  { month: "Jan", amount: 30000 },
  { month: "Feb", amount: 25000 },
  { month: "Mar", amount: 40000 },
];

const usersByRoleData = [
  { name: "Admin", value: 10 },
  { name: "Volunteer", value: 40 },
  { name: "Lawyer", value: 30 },
  { name: "Donor", value: 22 },
];

const ChartSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {/* a. Cases Over Time */}
      <div className="bg-white shadow rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-4">Cases Over Time</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={casesOverTimeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="cases" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* b. Cases by Status */}
      <div className="bg-white shadow rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-4">Cases by Status</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={casesByStatusData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {casesByStatusData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* c. Cases by Type */}
      <div className="bg-white shadow rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-4">Cases by Type</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={casesByTypeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* d. Donations over Time */}
      <div className="bg-white shadow rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-4">Donations Over Time</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={donationsOverTimeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#facc15" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* e. Users by Role */}
      <div className="bg-white shadow rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-4">Users by Role</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={usersByRoleData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {usersByRoleData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;
