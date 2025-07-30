import React from "react";
import { FaLightbulb, FaLaptopCode, FaRocket } from "react-icons/fa";

const InnovationImportance = () => {
  const points = [
    {
      icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
      text: "In a fast-evolving world, traditional teaching must evolve.",
    },
    {
      icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
      text: "We integrate cutting-edge tools, ideas, and methods into every aspect of what we do.",
    },
    {
      icon: <FaRocket className="text-purple-500 text-3xl" />,
      text: "Innovation empowers learners to solve real-world challenges.",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Why Innovation Matters to Us
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {points.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 flex flex-col items-center shadow hover:shadow-md transition duration-300"
            >
              {item.icon}
              <p className="mt-4 text-gray-700 text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationImportance;
