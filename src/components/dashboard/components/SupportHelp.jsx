// src/pages/Settings/SupportHelp.jsx
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How can I reset my password?",
    answer: "Go to Account Security > Change Password and follow the steps.",
  },
  {
    question: "Where can I find my donation receipts?",
    answer: "Visit the Reports section and download your Donation Report.",
  },
];

const SupportHelp = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };


  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Support & Help</h2>

      {/* FAQ Section */}
      <div className="">
        <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 mb-3 cursor-pointer hover:bg-gray-100 transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">{faq.question}</p>
              {expandedIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
            {expandedIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportHelp;
