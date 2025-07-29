import React from 'react';
import Header  from "../components/Header";
import SearchFilterPanel  from "../components/SearchFilterPanel";
import CaseSummaryCards  from "../components/CaseSummaryCards";
import CasesTable  from "../components/CasesTable";
import AddNewCaseButton from "../components/AddNewCaseButton";


const DashboardHome = () => {
  return (
    <div className="p-4 text-gray-900 font-heading">
      <Header title="All Cases" subtitle="Here are all the cases" />
      <SearchFilterPanel />
      <CaseSummaryCards />
      <CasesTable />
      <AddNewCaseButton />
    </div>
  );
};

export default DashboardHome;
