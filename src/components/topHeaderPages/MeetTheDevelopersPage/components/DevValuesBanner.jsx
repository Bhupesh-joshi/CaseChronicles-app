import React from "react";
import { FaLightbulb, FaLock, FaGlobe, FaTools } from "react-icons/fa";

const devValues = [
  {
    icon: <FaLightbulb className="text-yellow-400 text-3xl" />,
    title: "Simplicity in Design",
    desc: "We believe in clean, intuitive, and minimal interfaces.",
  },
  {
    icon: <FaLock className="text-blue-500 text-3xl" />,
    title: "Data Privacy & Security",
    desc: "User data is protected at every layer of our stack.",
  },
  {
    icon: <FaGlobe className="text-green-500 text-3xl" />,
    title: "Accessibility for All",
    desc: "Our platform is designed to be inclusive for everyone.",
  },
  {
    icon: <FaTools className="text-purple-500 text-3xl" />,
    title: "Continuous Improvement",
    desc: "We iterate fast, always learning and optimizing.",
  },
];

const DevValuesBanner = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Our Core Development Values</h2>
        <p className="text-gray-600">The philosophy that shaped our platform from ground up.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {devValues.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-md p-6 text-center transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{value.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
            <p className="text-gray-600 text-sm">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevValuesBanner;
