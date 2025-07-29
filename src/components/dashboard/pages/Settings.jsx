import React from 'react';
import Header from "../components/Header";
import ProfileSettings from "../components/ProfileSettings";
import AccountSecurity from "../components/AccountSecurity";
// import NotificationSettings from "../components/NotificationSettings";
// import ThemeUIPreferences from "../components/ThemeUIPreferences";
import PrivacySettings from "../components/PrivacySettings";
// import AdminSettings from "../components/AdminSettings";
import SupportHelp from "../components/SupportHelp";
import DataBackup from "../components/DataBackup";
import SaveResetButtons from "../components/SaveResetButtons";
import SystemLogs from "../components/SystemLogs";

const Settings = () => {
  return (
    <div className="p-4 text-gray-900 font-heading">
      <Header title="Settings" subtitle="Update your settings and preferences" />
      <ProfileSettings />
      <AccountSecurity />
      {/* <NotificationSettings /> */}
      {/* <ThemeUIPreferences /> */}
      <PrivacySettings />
      {/* <AdminSettings /> */}
      <SupportHelp />
      <DataBackup />
      <SaveResetButtons />
      <SystemLogs />
    </div>
  );
};

export default Settings;
