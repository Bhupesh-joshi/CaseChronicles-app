import React from "react";
import { FaLightbulb, FaGlobe, FaUsers, FaCompass } from "react-icons/fa";

const insights = [
  {
    icon: <FaCompass size={30} className="text-blue-600" />,
    title: "Strategic Vision",
    description:
      "Visionary leaders like Satya Nadella emphasize long-term thinking and aligning teams with purpose-driven goals.",
  },
  {
    icon: <FaLightbulb size={30} className="text-yellow-500" />,
    title: "Innovative Thinking",
    description:
      "Elon Musk champions creativity, disruption, and bold experimentation to solve global problems.",
  },
  {
    icon: <FaGlobe size={30} className="text-green-600" />,
    title: "Global Impact",
    description:
      "Effective leaders make decisions with a global perspective, ensuring sustainability and equity at scale.",
  },
  {
    icon: <FaUsers size={30} className="text-purple-600" />,
    title: "People-Centric Leadership",
    description:
      "Strong leaders prioritize empathy, communication, and empowering their teams to thrive.",
  },
];

const InsightCards = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Leadership Insights that Matter
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Learn from modern-day visionaries and adopt leadership principles that drive real impact.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-4">{insight.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {insight.title}
            </h3>
            <p className="text-gray-600 text-sm">{insight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsightCards;
