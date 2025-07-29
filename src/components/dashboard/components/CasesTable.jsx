// import { useState } from "react";
// import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

// const casesData = [
//   {
//     id: "C001",
//     title: "Property Dispute",
//     client: "Rahul Sharma",
//     status: "Pending",
//     date: "2025-07-20",
//     assignedTo: "Adv. Mehta",
//   },
//   {
//     id: "C002",
//     title: "Divorce Settlement",
//     client: "Priya Verma",
//     status: "In Progress",
//     date: "2025-07-18",
//     assignedTo: "Adv. Kapoor",
//   },
//   {
//     id: "C003",
//     title: "Criminal Hearing",
//     client: "Aman Khan",
//     status: "Closed",
//     date: "2025-07-10",
//     assignedTo: "Adv. Rao",
//   },
// ];

// const statusColors = {
//   Pending: "bg-yellow-100 text-yellow-800",
//   "In Progress": "bg-blue-100 text-blue-800",
//   Closed: "bg-green-100 text-green-800",
// };

// export default function CasesTable() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredData = casesData.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="bg-white shadow rounded-xl p-4 overflow-x-auto">
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="🔍 Search cases..."
//           className="w-full md:w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <table className="min-w-full table-auto border-collapse text-sm">
//         <thead className="sticky top-0 bg-gray-100">
//           <tr>
//             <th className="px-4 py-2 border">Case ID</th>
//             <th className="px-4 py-2 border">Case Title</th>
//             <th className="px-4 py-2 border">Client Name</th>
//             <th className="px-4 py-2 border">Status</th>
//             <th className="px-4 py-2 border">Date Created</th>
//             <th className="px-4 py-2 border">Assigned To</th>
//             <th className="px-4 py-2 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.length === 0 ? (
//             <tr>
//               <td colSpan="7" className="text-center py-6 text-gray-500">
//                 No cases found.
//               </td>
//             </tr>
//           ) : (
//             filteredData.map((item) => (
//               <tr key={item.id} className="hover:bg-gray-50">
//                 <td className="px-4 py-2 border">{item.id}</td>
//                 <td className="px-4 py-2 border">{item.title}</td>
//                 <td className="px-4 py-2 border">{item.client}</td>
//                 <td className="px-4 py-2 border">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[item.status]}`}
//                   >
//                     {item.status}
//                   </span>
//                 </td>
//                 <td className="px-4 py-2 border">{item.date}</td>
//                 <td className="px-4 py-2 border">{item.assignedTo}</td>
//                 <td className="px-4 py-2 border flex items-center justify-center gap-3 text-blue-600">
//                   <FaEye className="cursor-pointer" title="View" />
//                   <FaEdit className="cursor-pointer" title="Edit" />
//                   <FaTrash className="cursor-pointer text-red-500" title="Delete" />
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       {/* Pagination Placeholder */}
//       <div className="mt-4 flex justify-end">
//         <button className="px-3 py-1 border rounded-l-lg bg-gray-100 hover:bg-gray-200">
//           Prev
//         </button>
//         <button className="px-3 py-1 border-t border-b bg-gray-100 hover:bg-gray-200">
//           1
//         </button>
//         <button className="px-3 py-1 border rounded-r-lg bg-gray-100 hover:bg-gray-200">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

// const initialCases = [
//   {
//     id: "C001",
//     title: "Property Dispute",
//     client: "Rahul Sharma",
//     status: "Pending",
//     date: "2025-07-20",
//     assignedTo: "Adv. Mehta",
//   },
//   {
//     id: "C002",
//     title: "Divorce Settlement",
//     client: "Priya Verma",
//     status: "In Progress",
//     date: "2025-07-18",
//     assignedTo: "Adv. Kapoor",
//   },
//   {
//     id: "C003",
//     title: "Criminal Hearing",
//     client: "Aman Khan",
//     status: "Closed",
//     date: "2025-07-10",
//     assignedTo: "Adv. Rao",
//   },
// ];

// const statusColors = {
//   Pending: "bg-yellow-100 text-yellow-800",
//   "In Progress": "bg-blue-100 text-blue-800",
//   Closed: "bg-green-100 text-green-800",
// };

// export default function CasesTable() {
//   const [cases, setCases] = useState(initialCases);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selected, setSelected] = useState([]);

//   const filteredCases = cases.filter((c) =>
//     c.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSelectAll = () => {
//     if (selected.length === filteredCases.length) {
//       setSelected([]);
//     } else {
//       setSelected(filteredCases.map((c) => c.id));
//     }
//   };

//   const handleSelectRow = (id) => {
//     setSelected((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//     );
//   };

//   const handleDeleteSelected = () => {
//     const remaining = cases.filter((c) => !selected.includes(c.id));
//     setCases(remaining);
//     setSelected([]);
//   };

//   const handleExport = () => {
//     const selectedData = cases.filter((c) => selected.includes(c.id));
//     console.log("Exporting:", selectedData);
//     alert("Exported to console 📤");
//   };

//   const handleAssign = () => {
//     alert("Assign action on selected rows");
//   };

//   const handleChangeStatus = () => {
//     alert("Change status on selected rows");
//   };

//   return (
//     <div className="bg-white shadow rounded-xl p-4 overflow-x-auto">
//       {/* Search */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="🔍 Search cases..."
//           className="w-full md:w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Bulk Actions */}
//       {selected.length > 0 && (
//         <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-100 p-3 rounded-md mb-4">
//           <span className="text-sm text-gray-700">
//             {selected.length} selected
//           </span>
//           <div className="flex flex-wrap gap-2 text-sm">
//             <button onClick={handleDeleteSelected} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
//               Delete
//             </button>
//             <button onClick={handleExport} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
//               Export
//             </button>
//             <button onClick={handleAssign} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
//               Assign
//             </button>
//             <button onClick={handleChangeStatus} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
//               Change Status
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Table */}
//       <table className="min-w-full table-auto border-collapse text-sm">
//         <thead className="sticky top-0 bg-gray-100 z-10">
//           <tr>
//             <th className="px-4 py-2 border">
//               <input
//                 type="checkbox"
//                 checked={
//                   selected.length > 0 &&
//                   selected.length === filteredCases.length
//                 }
//                 onChange={handleSelectAll}
//               />
//             </th>
//             <th className="px-4 py-2 border">Case ID</th>
//             <th className="px-4 py-2 border">Case Title</th>
//             <th className="px-4 py-2 border">Client Name</th>
//             <th className="px-4 py-2 border">Status</th>
//             <th className="px-4 py-2 border">Date Created</th>
//             <th className="px-4 py-2 border">Assigned To</th>
//             <th className="px-4 py-2 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredCases.length === 0 ? (
//             <tr>
//               <td colSpan="8" className="text-center py-6 text-gray-500">
//                 No cases found.
//               </td>
//             </tr>
//           ) : (
//             filteredCases.map((c) => (
//               <tr key={c.id} className="hover:bg-gray-50">
//                 <td className="px-4 py-2 border">
//                   <input
//                     type="checkbox"
//                     checked={selected.includes(c.id)}
//                     onChange={() => handleSelectRow(c.id)}
//                   />
//                 </td>
//                 <td className="px-4 py-2 border">{c.id}</td>
//                 <td className="px-4 py-2 border">{c.title}</td>
//                 <td className="px-4 py-2 border">{c.client}</td>
//                 <td className="px-4 py-2 border">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[c.status]}`}
//                   >
//                     {c.status}
//                   </span>
//                 </td>
//                 <td className="px-4 py-2 border">{c.date}</td>
//                 <td className="px-4 py-2 border">{c.assignedTo}</td>
//                 <td className="px-4 py-2 border flex items-center justify-center gap-3 text-blue-600">
//                   <FaEye className="cursor-pointer" title="View" />
//                   <FaEdit className="cursor-pointer" title="Edit" />
//                   <FaTrash className="cursor-pointer text-red-500" title="Delete" />
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       {/* Pagination Placeholder */}
//       <div className="mt-4 flex justify-end">
//         <button className="px-3 py-1 border rounded-l-lg bg-gray-100 hover:bg-gray-200">
//           Prev
//         </button>
//         <button className="px-3 py-1 border-t border-b bg-gray-100 hover:bg-gray-200">
//           1
//         </button>
//         <button className="px-3 py-1 border rounded-r-lg bg-gray-100 hover:bg-gray-200">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const initialCases = [
  {
    id: "C001",
    title: "Property Dispute",
    client: "Rahul Sharma",
    status: "Pending",
    date: "2025-07-20",
    assignedTo: "Adv. Mehta",
  },
  {
    id: "C002",
    title: "Divorce Settlement",
    client: "Priya Verma",
    status: "In Progress",
    date: "2025-07-18",
    assignedTo: "Adv. Kapoor",
  },
  {
    id: "C003",
    title: "Criminal Hearing",
    client: "Aman Khan",
    status: "Closed",
    date: "2025-07-10",
    assignedTo: "Adv. Rao",
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  "In Progress": "bg-blue-100 text-blue-800",
  Closed: "bg-green-100 text-green-800",
};

export default function CasesTable() {
  const [cases, setCases] = useState(initialCases);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState([]);

  const filteredCases = cases.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectAll = () => {
    if (selected.length === filteredCases.length) {
      setSelected([]);
    } else {
      setSelected(filteredCases.map((c) => c.id));
    }
  };

  const handleSelectRow = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    if (!window.confirm("Are you sure to delete selected cases?")) return;
    const remaining = cases.filter((c) => !selected.includes(c.id));
    setCases(remaining);
    setSelected([]);
  };

  const handleExport = () => {
    const selectedData = cases.filter((c) => selected.includes(c.id));
    console.log("Exported Data:", selectedData);
    alert("Exported data shown in console 📤");
  };

  const handleAssign = () => {
    alert("Assigned selected cases (simulation)");
  };

  const handleChangeStatus = () => {
    alert("Status changed on selected cases (simulation)");
  };

  const handleView = (id) => {
    alert(`View Case: ${id}`);
  };

  const handleEdit = (id) => {
    alert(`Edit Case: ${id}`);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure to delete this case?")) return;
    setCases((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="bg-white shadow rounded-xl p-4 w-full overflow-x-auto">
      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="🔍 Search cases..."
          className="w-full md:w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Bulk Actions */}
      {selected.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-100 p-3 rounded-md mb-4">
          <span className="text-sm text-gray-700">{selected.length} selected</span>
          <div className="flex flex-wrap gap-2 text-sm">
            <button onClick={handleDeleteSelected} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
              Delete
            </button>
            <button onClick={handleExport} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
              Export
            </button>
            <button onClick={handleAssign} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
              Assign
            </button>
            <button onClick={handleChangeStatus} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
              Change Status
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse text-sm">
          <thead className="sticky top-0 bg-gray-100 z-10">
            <tr>
              <th className="px-4 py-2 border">
                <input
                  type="checkbox"
                  checked={
                    selected.length > 0 &&
                    selected.length === filteredCases.length
                  }
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-4 py-2 border">Case ID</th>
              <th className="px-4 py-2 border">Case Title</th>
              <th className="px-4 py-2 border">Client Name</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Date Created</th>
              <th className="px-4 py-2 border">Assigned To</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCases.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-500">
                  No cases found.
                </td>
              </tr>
            ) : (
              filteredCases.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">
                    <input
                      type="checkbox"
                      checked={selected.includes(c.id)}
                      onChange={() => handleSelectRow(c.id)}
                    />
                  </td>
                  <td className="px-4 py-2 border">{c.id}</td>
                  <td className="px-4 py-2 border">{c.title}</td>
                  <td className="px-4 py-2 border">{c.client}</td>
                  <td className="px-4 py-2 border">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[c.status]}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 border">{c.date}</td>
                  <td className="px-4 py-2 border">{c.assignedTo}</td>
                  <td className="px-4 py-2 border">
                    <div className="flex items-center justify-center gap-3 text-blue-600">
                      <FaEye className="cursor-pointer" title="View" onClick={() => handleView(c.id)} />
                      <FaEdit className="cursor-pointer" title="Edit" onClick={() => handleEdit(c.id)} />
                      <FaTrash className="cursor-pointer text-red-500" title="Delete" onClick={() => handleDelete(c.id)} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination UI */}
      <div className="mt-4 flex justify-end">
        <button className="px-3 py-1 border rounded-l-lg bg-gray-100 hover:bg-gray-200">
          Prev
        </button>
        <button className="px-3 py-1 border-t border-b bg-gray-100 hover:bg-gray-200">
          1
        </button>
        <button className="px-3 py-1 border rounded-r-lg bg-gray-100 hover:bg-gray-200">
          Next
        </button>
      </div>
    </div>
  );
}
