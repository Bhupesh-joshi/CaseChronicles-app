import React, { useRef } from 'react';

const DataBackup = () => {
  const fileInputRef = useRef(null);

  const handleExport = (type) => {
    alert(`Exporting data as ${type}`);
    // Add actual export logic here
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`Imported file: ${file.name}`);
      // Add actual import logic here
    }
  };

  const handleBackup = () => {
    alert('Creating backup...');
    // Add actual backup logic here
  };

  const handleRestore = () => {
    alert('Restoring backup...');
    // Add actual restore logic here
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg p-6 rounded-lg space-y-6">

      <h2 className="text-xl font-semibold mb-4">📁 Data & Backup</h2>

      {/* Export Section */}
      <div className="space-y-2">
        <h3 className="font-medium text-gray-700">Export Data</h3>
        <div className="flex gap-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
            onClick={() => handleExport('CSV')}
          >
            <i className="fa fa-download"></i> Export CSV
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2"
            onClick={() => handleExport('PDF')}
          >
            <i className="fa fa-file-pdf-o"></i> Export PDF
          </button>
        </div>
      </div>

      {/* Import Section */}
      <div className="space-y-2">
        <h3 className="font-medium text-gray-700">Import Data</h3>
        <input
          type="file"
          accept=".csv, .pdf, .json"
          className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-gray-100 file:text-gray-700
          hover:file:bg-gray-200"
          onChange={handleImport}
          ref={fileInputRef}
        />
      </div>

      {/* Backup & Restore */}
      <div className="space-y-2">
        <h3 className="font-medium text-gray-700">Backup & Restore</h3>
        <div className="flex gap-4">
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 flex items-center gap-2"
            onClick={handleBackup}
          >
            <i className="fa fa-cloud-upload"></i> Create Backup
          </button>
          <button
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 flex items-center gap-2"
            onClick={handleRestore}
          >
            <i className="fa fa-undo"></i> Restore
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataBackup;
