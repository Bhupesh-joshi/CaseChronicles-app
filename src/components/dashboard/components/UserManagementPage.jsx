// UserManagementPage.jsx (Styled with Tailwind)
import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEye, FaDownload } from 'react-icons/fa';

const roles = ['Admin', 'Manager', 'Volunteer'];
const statuses = ['Active', 'Inactive'];

const initialUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
    registeredOn: '2025-07-20',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Volunteer',
    status: 'Inactive',
    registeredOn: '2025-07-21',
  },
  {
    id: 3,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Volunteer',
    status: 'Inactive',
    registeredOn: '2025-07-21',
  },
  {
    id: 4,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Volunteer',
    status: 'Inactive',
    registeredOn: '2025-07-21',
  },
  {
    id: 5,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Volunteer',
    status: 'Inactive',
    registeredOn: '2025-07-21',
  },
];

export default function UserManagementPage() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    status: 'Active',
  });
  const [toast, setToast] = useState('');

  const handleSearch = () => {
    return users.filter(user =>
      (user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        String(user.id).includes(search)) &&
      (roleFilter === '' || user.role === roleFilter) &&
      (statusFilter === '' || user.status === statusFilter)
    );
  };

  const handleToggleStatus = (id) => {
    const updated = users.map(user =>
      user.id === id ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } : user
    );
    setUsers(updated);
    showToast('Status updated');
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
    showToast('User deleted');
  };

  const handleBulkDelete = () => {
    setUsers(users.filter(user => !selectedUsers.includes(user.id)));
    setSelectedUsers([]);
    showToast('Bulk delete successful');
  };

  const handleAddUser = () => {
    const newEntry = {
      ...newUser,
      id: users.length + 1,
      registeredOn: new Date().toISOString().split('T')[0],
    };
    setUsers([...users, newEntry]);
    setShowAddModal(false);
    showToast('User added');
    setNewUser({ name: '', email: '', password: '', role: '', status: 'Active' });
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const handleExportCSV = () => {
    const csv = [
      ['ID', 'Name', 'Email', 'Role', 'Status', 'Registered On'],
      ...users.map(u => [u.id, u.name, u.email, u.role, u.status, u.registeredOn])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'users.csv';
    link.click();
  };

  return (
    <div className="p-6 font-sans max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-bold">User Management</h2>
      <p className="text-gray-500 mb-4">Dashboard &gt; Users</p>

      <div className="flex flex-wrap gap-2 items-center mb-4">
        <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-64" />
        <select value={roleFilter} onChange={e => setRoleFilter(e.target.value)}
          className="border rounded px-3 py-2">
          <option value="">All Roles</option>
          {roles.map(r => <option key={r}>{r}</option>)}
        </select>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
          className="border rounded px-3 py-2">
          <option value="">All Status</option>
          {statuses.map(s => <option key={s}>{s}</option>)}
        </select>
        <button onClick={() => setShowAddModal(true)}
          className="ml-auto bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
          <FaPlus /> Add User
        </button>
      </div>

      {selectedUsers.length > 0 && (
        <div className="mb-2">
          <button onClick={handleBulkDelete} className="bg-red-600 text-white px-4 py-1 rounded">
            Delete Selected ({selectedUsers.length})
          </button>
        </div>
      )}

      <div className="overflow-auto">
        <table className="w-full table-auto border rounded overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2"><input type="checkbox" onChange={(e) => {
                if (e.target.checked) setSelectedUsers(users.map(u => u.id));
                else setSelectedUsers([]);
              }} /></th>
              <th className="p-2">ID</th><th className="p-2">Name</th><th className="p-2">Email</th>
              <th className="p-2">Role</th><th className="p-2">Status</th>
              <th className="p-2">Registered</th><th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {handleSearch().map(user => (
              <tr key={user.id} className="border-t">
                <td className="p-2 text-center">
                  <input type="checkbox" checked={selectedUsers.includes(user.id)}
                    onChange={() => {
                      setSelectedUsers(prev =>
                        prev.includes(user.id)
                          ? prev.filter(id => id !== user.id)
                          : [...prev, user.id]);
                    }} />
                </td>
                <td className="p-2 text-center">{user.id}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">
                  <button className={`px-2 py-1 rounded text-white ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}`}
                    onClick={() => handleToggleStatus(user.id)}>
                    {user.status}
                  </button>
                </td>
                <td className="p-2">{user.registeredOn}</td>
                <td className="p-2 flex gap-2 text-blue-600">
                  <FaEye className="cursor-pointer" />
                  <FaEdit className="cursor-pointer" />
                  <FaTrash className="cursor-pointer text-red-500" onClick={() => handleDelete(user.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button onClick={handleExportCSV} className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded">
          <FaDownload /> Export CSV
        </button>
        <div className="flex items-center gap-2">
          Page 1 of 1 | Rows per page:
          <select className="border rounded px-2 py-1">
            <option>5</option>
            <option>10</option>
            <option>25</option>
          </select>
        </div>
      </div>

      {toast && (
        <div className="bg-green-600 text-white px-4 py-2 mt-4 rounded">
          {toast}
        </div>
      )}

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Add New User</h3>
            <input type="text" placeholder="Name" value={newUser.name}
              onChange={e => setNewUser({ ...newUser, name: e.target.value })}
              className="border px-3 py-2 rounded w-full mb-2" />
            <input type="email" placeholder="Email" value={newUser.email}
              onChange={e => setNewUser({ ...newUser, email: e.target.value })}
              className="border px-3 py-2 rounded w-full mb-2" />
            <input type="password" placeholder="Password" value={newUser.password}
              onChange={e => setNewUser({ ...newUser, password: e.target.value })}
              className="border px-3 py-2 rounded w-full mb-2" />
            <select value={newUser.role} onChange={e => setNewUser({ ...newUser, role: e.target.value })}
              className="border px-3 py-2 rounded w-full mb-2">
              <option value="">Select Role</option>
              {roles.map(r => <option key={r}>{r}</option>)}
            </select>
            <select value={newUser.status} onChange={e => setNewUser({ ...newUser, status: e.target.value })}
              className="border px-3 py-2 rounded w-full mb-4">
              {statuses.map(s => <option key={s}>{s}</option>)}
            </select>
            <div className="flex justify-end gap-2">
              <button onClick={handleAddUser} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
              <button onClick={() => setShowAddModal(false)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
