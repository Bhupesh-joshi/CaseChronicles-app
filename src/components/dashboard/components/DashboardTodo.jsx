import React, { useState } from "react";
import { FaCheckCircle, FaPlus, FaCalendarAlt } from "react-icons/fa";

const DashboardTodo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Review new user registrations", due: "2025-07-25", done: false },
    { id: 2, task: "Approve pending cases", due: "2025-07-26", done: false },
    { id: 3, task: "Generate weekly report", due: "2025-07-27", done: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">📝 To-Do / Task Manager</h2>
        <button className="text-sm flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700">
          <FaPlus /> Add Task
        </button>
      </div>

      <ul className="space-y-4">
        {tasks.map(({ id, task, due, done }) => (
          <li key={id} className="flex justify-between items-center border-b pb-2">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={done}
                onChange={() => toggleTask(id)}
                className="w-5 h-5 text-blue-600"
              />
              <span className={`text-gray-800 ${done ? "line-through text-gray-400" : ""}`}>
                {task}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-500 gap-1">
              <FaCalendarAlt />
              <span>{due}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardTodo;
