import React, { useState } from "react";
import { FaDownload, FaPlus } from "react-icons/fa";
// import { Modal, Button, Input, Select, DatePicker } from "antd";
import dayjs from "dayjs";

// const { RangePicker } = DatePicker;

const ExportReports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportType, setReportType] = useState("");
  const [format, setFormat] = useState("PDF");
  const [dateRange, setDateRange] = useState([]);

  const handleDownload = () => {
    // 🧠 Simulate report generation (here you'd fetch from backend or generate dynamically)
    const type = reportType || "All Reports";
    const range = dateRange.length
      ? `${dayjs(dateRange[0]).format("DD MMM")} - ${dayjs(dateRange[1]).format("DD MMM YYYY")}`
      : "All Time";

    alert(
      `📄 Downloading ${type} report\n🗓️ Date Range: ${range}\n🧾 Format: ${format}`
    );
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-xl mt-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus /> Generate Report
        </button>

        <button
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow"
          onClick={() => alert("⬇️ Downloading all reports...")}
        >
          <FaDownload /> Download All Reports
        </button>
      </div>

      {/* Modal */}
      <Modal
        title="Generate Report"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleDownload}
        okText="Download"
        cancelText="Cancel"
      >
        <div className="flex flex-col gap-4">
          {/* Report Type */}
          <div>
            <label className="block mb-1 font-medium">Report Type</label>
            <Select
              className="w-full"
              value={reportType}
              onChange={(value) => setReportType(value)}
              placeholder="Select report type"
              options={[
                { value: "Case Report", label: "Case Report" },
                { value: "Donation Report", label: "Donation Report" },
                { value: "User Report", label: "User Report" },
              ]}
            />
          </div>

          {/* Date Range */}
          <div>
            <label className="block mb-1 font-medium">Date Range</label>
            <RangePicker
              className="w-full"
              onChange={(dates) => setDateRange(dates)}
              format="DD MMM YYYY"
            />
          </div>

          {/* Format */}
          <div>
            <label className="block mb-1 font-medium">Format</label>
            <Select
              className="w-full"
              value={format}
              onChange={(value) => setFormat(value)}
              options={[
                { value: "PDF", label: "PDF" },
                { value: "Excel", label: "Excel" },
              ]}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ExportReports;
