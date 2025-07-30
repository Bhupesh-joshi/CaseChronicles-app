import React from "react";
import {
  FaFileAlt,
  FaBrain,
  FaLink,
  FaBullseye,
  FaImage,
  FaStopwatch,
} from "react-icons/fa";

const essentialsData = [
  {
    icon: <FaFileAlt size={28} className="text-blue-600" />,
    title: "Format Guidelines",
    description: "Submit in PDF or DOCX with clear formatting.",
  },
  {
    icon: <FaBrain size={28} className="text-purple-600" />,
    title: "Case Summary",
    description: "Add abstract or executive summary.",
  },
  {
    icon: <FaLink size={28} className="text-green-600" />,
    title: "Referencing",
    description: "Use proper citations for all external sources.",
  },
  {
    icon: <FaBullseye size={28} className="text-red-500" />,
    title: "Learning Objectives",
    description: "Clearly state what the learner should take away.",
  },
  {
    icon: <FaImage size={28} className="text-yellow-500" />,
    title: "Media Attachments",
    description: "Add supporting images, if available.",
  },
  {
    icon: <FaStopwatch size={28} className="text-indigo-500" />,
    title: "Estimated Read Time",
    description: "Mention approximate time to read the case.",
  },
];

const SubmitEssentialsList = () => {
  return (
    <section className="py-14 bg-white dark:bg-[var(--gray-100)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--gray-900)] mb-10">
          Submission Essentials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {essentialsData.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--gray-50)] rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--gray-800)] mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--gray-600)] text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubmitEssentialsList;
