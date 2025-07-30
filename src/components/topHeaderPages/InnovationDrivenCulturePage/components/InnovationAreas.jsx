import React from "react";
import {
  FaBookOpen,
  FaMobileAlt,
  FaUsers,
  FaBrain,
} from "react-icons/fa";

const InnovationAreas = () => {
  const areas = [
    {
      icon: <FaBookOpen className="text-indigo-600 text-3xl mb-4" />,
      title: "Case Methodology",
      description: "Innovative storytelling formats that enhance learning engagement.",
    },
    {
      icon: <FaMobileAlt className="text-green-600 text-3xl mb-4" />,
      title: "Digital Delivery",
      description: "eLearning platforms and mobile-first tools for seamless access.",
    },
    {
      icon: <FaUsers className="text-blue-600 text-3xl mb-4" />,
      title: "Collaboration",
      description: "Partnering with global B-schools and educators to enrich education.",
    },
    {
      icon: <FaBrain className="text-purple-600 text-3xl mb-4" />,
      title: "AI & Data Use",
      description: "Smart tagging and user-behavior-based recommendations for personalization.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          Areas of Innovation
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition duration-300"
            >
              {area.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationAreas;
