import React from 'react';
import Header from "../components/Header";
// import ReportsPageHeader  from "../components/ReportsPageHeader";
import ReportsFilters from "../components/ReportsFilters";
import SummaryStats from "../components/SummaryStats";
import ChartSection from "../components/ChartSection";
import DetailedReportsTable from "../components/DetailedReportsTable";
// import ExportReports from "../components/ExportReports";
import ScheduledReports from "../components/ScheduledReports";


const Reports = () => {
  return (
    <div className="p-4 text-gray-900 font-heading">
      <Header title="Reports" subtitle="This is the Reports page" />
      {/* <ReportsPageHeader /> */}
      <ReportsFilters />
      <SummaryStats />
      <ChartSection />
      <DetailedReportsTable />
      {/* <ExportReports /> */}
      <ScheduledReports />
    </div>
  );
};

export default Reports;
