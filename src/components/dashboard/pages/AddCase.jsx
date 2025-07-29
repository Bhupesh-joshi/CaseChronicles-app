import React, { useState } from "react";
import Header  from "../components/Header";

const AddCaseForm = () => {
  const [formData, setFormData] = useState({
    victimName: "",
    victimAge: "",
    caseType: "",
    caseStatus: "",
    caseDescription: "",
    documents: [],
    lawyer: "",
    hearingDate: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "documents") {
      setFormData({ ...formData, [name]: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">

    <Header title="Add Case" subtitle="Add a new case" />

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow-md rounded-md p-6"
      >
        {/* <h2 className="text-xl font-bold mb-4 text-center">Add New Case</h2> */}

        {/* Victim Name */}
        <div>
          <label className="block font-medium mb-1">Victim Name</label>
          <input
            type="text"
            name="victimName"
            value={formData.victimName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Victim Age */}
        <div>
          <label className="block font-medium mb-1">Victim Age</label>
          <input
            type="number"
            name="victimAge"
            value={formData.victimAge}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Case Type */}
        <div>
          <label className="block font-medium mb-1">Case Type</label>
          <select
            name="caseType"
            value={formData.caseType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">-- Select Case Type --</option>
            <option value="Criminal">Criminal</option>
            <option value="Civil">Civil</option>
            <option value="Family">Family</option>
            <option value="Corporate">Corporate</option>
            <option value="Property">Property</option>
            <option value="Labor">Labor</option>
            <option value="Cyber Crime">Cyber Crime</option>
            <option value="Consumer Dispute">Consumer Dispute</option>
          </select>
        </div>

        {/* Case Status */}
        <div>
          <label className="block font-medium mb-1">Case Status</label>
          <select
            name="caseStatus"
            value={formData.caseStatus}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">-- Select Status --</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="On Hold">On Hold</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        {/* Case Description */}
        <div>
          <label className="block font-medium mb-1">Case Description</label>
          <textarea
            name="caseDescription"
            value={formData.caseDescription}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Document Upload */}
        <div>
          <label className="block font-medium mb-1">Upload Documents</label>
          <input
            type="file"
            name="documents"
            onChange={handleChange}
            multiple
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Assigned Lawyer */}
        <div>
          <label className="block font-medium mb-1">Assigned Lawyer</label>
          <input
            type="text"
            name="lawyer"
            value={formData.lawyer}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Hearing Date */}
        <div>
          <label className="block font-medium mb-1">Hearing Date</label>
          <input
            type="date"
            name="hearingDate"
            value={formData.hearingDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit Case
          </button>
        </div>
      </form>

      {/* Display Submitted Data */}
      {submittedData && (
        <div className="mt-10 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 max-w-7xl mx-auto">
  <h3 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
    🎯 Submitted Case Data
  </h3>

  <div className="space-y-4 text-gray-700 text-sm md:text-base">
    <div className="flex flex-col md:flex-row">
      <span className="font-semibold w-48">👤 Victim Name:</span>
      <span>{submittedData.victimName}</span>
    </div>
    <div className="flex flex-col md:flex-row">
      <span className="font-semibold w-48">🎂 Victim Age:</span>
      <span>{submittedData.victimAge}</span>
    </div>
    <div className="flex flex-col md:flex-row">
      <span className="font-semibold w-48">⚖️ Case Type:</span>
      <span>{submittedData.caseType}</span>
    </div>
    <div className="flex flex-col md:flex-row">
      <span className="font-semibold w-48">📌 Case Status:</span>
      <span>{submittedData.caseStatus}</span>
    </div>
    <div className="flex flex-col md:flex-row md:items-start gap-2 mb-2">
  <span className="font-semibold text-gray-700 min-w-[150px]">📝 Description:</span>
  <span className="text-gray-800">{submittedData.caseDescription}</span>
</div>

    <div className="flex flex-col md:flex-row">
      <span className="font-semibold w-48">👨‍⚖️ Assigned Lawyer:</span>
      <span>{submittedData.lawyer}</span>
    </div>
    <div className="flex flex-col md:flex-row">
      <span className="font-semibold w-48">📅 Hearing Date:</span>
      <span>{submittedData.hearingDate}</span>
    </div>

    <div className="flex flex-col">
      <span className="font-semibold mb-2">📄 Uploaded Documents:</span>
      <ul className="list-disc pl-6 space-y-1">
        {submittedData.documents.map((doc, index) => (
          <li key={index}>{doc.name}</li>
        ))}
      </ul>
    </div>
  </div>
</div>

      )}
    </div>
  );
};

export default AddCaseForm;
