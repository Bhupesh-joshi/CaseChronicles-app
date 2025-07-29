// PrivacySettings.jsx
import React, { useState } from "react";

const PrivacySettings = () => {
  const [profileVisible, setProfileVisible] = useState(true);
  const [canMessage, setCanMessage] = useState("Everyone");

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action is irreversible.")) {
      // TODO: Call API to delete account
      alert("Account deletion initiated.");
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 dark:text-white">🔒 Privacy Settings</h2>

      {/* Profile Visibility */}
      <div className="mb-6">
        <label className="block font-medium dark:text-white mb-2">Profile Visibility</label>
        <div className="flex items-center gap-4">
          <button
            className={`px-4 py-2 rounded-md text-white ${profileVisible ? "bg-green-600" : "bg-gray-500"}`}
            onClick={() => setProfileVisible(!profileVisible)}
          >
            {profileVisible ? "Visible" : "Hidden"}
          </button>
        </div>
      </div>

      {/* Who Can Message */}
      <div className="mb-6">
        <label className="block font-medium dark:text-white mb-2">Who Can Message You</label>
        <select
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
          value={canMessage}
          onChange={(e) => setCanMessage(e.target.value)}
        >
          <option value="Everyone">Everyone</option>
          <option value="Only Followers">Only Followers</option>
          <option value="No One">No One</option>
        </select>
      </div>

      {/* Delete Account */}
      <div className="mb-6">
        <label className="block font-medium dark:text-white mb-2">Delete Account</label>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          onClick={handleDeleteAccount}
        >
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default PrivacySettings;
