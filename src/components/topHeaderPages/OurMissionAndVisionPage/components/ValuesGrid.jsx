import React from "react";
import { FaLightbulb, FaUsers, FaGlobe, FaHandshake, FaBalanceScale, FaRocket } from "react-icons/fa"; // Font Awesome

const values = [
  {
    title: "Integrity",
    icon: <FaBalanceScale className="text-3xl text-indigo-600" />,
    description: "Upholding honesty and strong moral principles in everything we do.",
  },
  {
    title: "Innovation",
    icon: <FaLightbulb className="text-3xl text-yellow-500" />,
    description: "Encouraging creativity and forward-thinking solutions.",
  },
  {
    title: "Diversity",
    icon: <FaUsers className="text-3xl text-pink-500" />,
    description: "Celebrating different perspectives and inclusive practices.",
  },
  {
    title: "Collaboration",
    icon: <FaHandshake className="text-3xl text-green-500" />,
    description: "Working together to achieve common goals and shared success.",
  },
  {
    title: "Global Impact",
    icon: <FaGlobe className="text-3xl text-blue-500" />,
    description: "Creating value that transcends borders and cultures.",
  },
  {
    title: "Growth",
    icon: <FaRocket className="text-3xl text-red-500" />,
    description: "Pushing boundaries for continuous improvement and learning.",
  },
];

const ValuesGrid = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          🔁 Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 text-left"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;
