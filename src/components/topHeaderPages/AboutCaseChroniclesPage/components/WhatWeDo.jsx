import React from "react";
import { FaShareAlt, FaUsers, FaComments, FaRobot } from "react-icons/fa";

const services = [
  {
    icon: <FaShareAlt className="text-3xl text-blue-600" />,
    title: "Case Sharing",
    description: "Easily browse, upload, and share academic or business case studies.",
  },
  {
    icon: <FaUsers className="text-3xl text-green-600" />,
    title: "Author Collaboration",
    description: "Work together with fellow educators and professionals on real-world cases.",
  },
  {
    icon: <FaComments className="text-3xl text-purple-600" />,
    title: "Peer Feedback",
    description: "Get valuable feedback from a global community of learners and experts.",
  },
  {
    icon: <FaRobot className="text-3xl text-pink-600" />,
    title: "AI-Enhanced Summarization",
    description: "Save time with AI tools that summarize and highlight key insights from case studies.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-16 px-4 bg-white" id="what-we-do">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">What We Do</h2>
        <p className="text-gray-600 mb-12 text-lg">
          CaseChronicles empowers education through curated case studies, collaborative tools, and AI features.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
