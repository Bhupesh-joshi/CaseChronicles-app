import React from "react";
import { FaLightbulb, FaCode, FaRocket, FaShieldAlt } from "react-icons/fa";

const milestones = [
  {
    icon: <FaLightbulb className="text-yellow-400" />,
    title: "Idea Conceptualized",
    description: "Initial brainstorming and requirement gathering began.",
    date: "Jan 2024",
  },
  {
    icon: <FaCode className="text-blue-500" />,
    title: "Frontend MVP Completed",
    description: "Core UI with major features was developed.",
    date: "Mar 2024",
  },
  {
    icon: <FaRocket className="text-green-500" />,
    title: "Beta Launch",
    description: "Launched beta version for internal testing.",
    date: "May 2024",
  },
  {
    icon: <FaShieldAlt className="text-red-500" />,
    title: "Security Audit Done",
    description: "Underwent full security audit and compliance testing.",
    date: "Jul 2024",
  },
];

const DevelopmentTimeline = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Behind-the-Scenes Timeline</h2>
        <div className="relative border-l-4 border-gray-200">
          {milestones.map((step, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              <span className="absolute -left-7 top-1 bg-white border border-gray-300 rounded-full p-2 shadow-md">
                {step.icon}
              </span>
              <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <span className="text-sm text-gray-500">{step.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentTimeline;
