import { useState } from "react";

const AccountSecurity = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  const handlePasswordChange = () => {
    // 🔐 Password change logic here
    alert("Password updated successfully!");
  };

  const handle2FAToggle = () => {
    setIs2FAEnabled(!is2FAEnabled);
    alert(`2FA ${!is2FAEnabled ? "enabled" : "disabled"} successfully`);
  };

  const handleLogoutAll = () => {
    // 🚪 Logout all devices logic
    alert("Logged out from all devices");
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Section Heading */}
      <h2 className="text-2xl font-semibold text-gray-800">Account Security</h2>

      {/* Change Password */}
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4 border">
        <h3 className="text-lg font-medium">Change Password</h3>
        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <button
          onClick={handlePasswordChange}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Update Password
        </button>
      </div>

      {/* 2FA Toggle */}
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4 border">
        <h3 className="text-lg font-medium">Two-Factor Authentication (2FA)</h3>
        <p className="text-sm text-gray-600">
          Add an extra layer of security to your account.
        </p>
        <button
          onClick={handle2FAToggle}
          className={`${
            is2FAEnabled ? "bg-red-600" : "bg-green-600"
          } text-white px-4 py-2 rounded-lg hover:opacity-90`}
        >
          {is2FAEnabled ? "Disable 2FA" : "Enable 2FA"}
        </button>
      </div>

      {/* Logout All Devices */}
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4 border">
        <h3 className="text-lg font-medium">Logout from All Devices</h3>
        <p className="text-sm text-gray-600">
          This will log you out from all active sessions.
        </p>
        <button
          onClick={handleLogoutAll}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Logout from All Devices
        </button>
      </div>
    </div>
  );
};

export default AccountSecurity;
