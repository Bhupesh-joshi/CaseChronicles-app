import React from 'react';
import Header  from "../components/Header";
// import UserPageHeader  from "../components/UserPageHeader";
import UserSearchAndFilters  from "../components/UserSearchAndFilters";
import UserAddButton  from "../components/UserAddButton";
// import UserTable  from "../components/UserTable";
import UserManagementPage  from "../components/UserManagementPage";


const Users = () => {
  return (
    <div className="p-4 text-gray-900 font-heading">
      <Header title="Users" subtitle="Manage users and their roles" />
      {/* <UserPageHeader /> */}
      <UserSearchAndFilters />
      <UserAddButton />
      {/* <UserTable /> */}
      <UserManagementPage />
    </div>
  );
};

export default Users;
