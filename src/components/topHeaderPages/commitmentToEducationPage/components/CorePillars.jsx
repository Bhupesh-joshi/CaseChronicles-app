import React from "react";
import { FaUsers, FaInfinity, FaLightbulb, FaBalanceScale } from "react-icons/fa";

const pillars = [
  {
    icon: <FaUsers className="text-3xl text-blue-600" />,
    title: "Inclusive Learning",
    description: "Education that welcomes every background and ability.",
  },
  {
    icon: <FaInfinity className="text-3xl text-blue-600" />,
    title: "Lifelong Learning",
    description: "Empowering growth at every age and stage of life.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-blue-600" />,
    title: "Innovation in Education",
    description: "Modern tools and creative methods for better learning.",
  },
  {
    icon: <FaBalanceScale className="text-3xl text-blue-600" />,
    title: "Equity & Access",
    description: "Ensuring fair and open access to quality education.",
  },
];

const CorePillars = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Our Core Pillars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              {pillar.icon}
              <h3 className="text-xl font-semibold mt-4 text-gray-700">
                {pillar.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;
