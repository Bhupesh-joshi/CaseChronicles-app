import React from "react";
import { FaPlus } from "react-icons/fa";

const AddNewCaseButton = ({ onClick }) => {
  return (
    <div className="flex justify-center mb-4">
      <button
        onClick={onClick}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all duration-200"
      >
        <FaPlus />
        Add New Case
      </button>
    </div>
  );
};

export default AddNewCaseButton;
