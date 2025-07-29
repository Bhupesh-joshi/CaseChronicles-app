import React from 'react';
import DashboardHeader from "../components/DashboardHeader";
import DashboardOverview from "../components/DashboardOverview";
import Charts from '../components/Charts';
import DashboardActivity from '../components/DashboardActivity';
import DashboardQuickActions from '../components/DashboardQuickActions';
import RecentCasesTable from '../components/RecentCasesTable';
import DashboardTodo from '../components/DashboardTodo';
import DashboardMessages from '../components/DashboardMessages';
import DashboardAnnouncements from '../components/DashboardAnnouncements';


const DashboardHome = () => {
  return (
    <div className="p-4 text-gray-900 font-heading">
      <DashboardHeader />
      <DashboardOverview />
      <Charts />
      <DashboardActivity />
      <DashboardQuickActions />
      <RecentCasesTable />
      <DashboardTodo />
      <DashboardMessages />
      <DashboardAnnouncements />
    </div>
  );
};

export default DashboardHome;
