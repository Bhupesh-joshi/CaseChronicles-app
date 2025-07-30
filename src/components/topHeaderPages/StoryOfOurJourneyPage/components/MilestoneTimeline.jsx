import React from "react";

const milestones = [
  {
    year: "2023",
    title: "Idea Born",
    description: "The concept of CaseCentre took shape after identifying the gap between academic theory and startup reality.",
  },
  {
    year: "2024 (Q1)",
    title: "Platform Launched",
    description: "The MVP of CaseCentre went live with a collection of real-world business cases.",
  },
  {
    year: "2024 (Q2)",
    title: "100+ Submissions",
    description: "Achieved a milestone of over 100 business case submissions from across industries.",
  },
  {
    year: "2024 (Q3)",
    title: "Global Recognition",
    description: "Partnered with leading business schools and startup incubators around the world.",
  },
  {
    year: "2025+",
    title: "Future Plans",
    description: "Expanding to include AI-curated case solutions and launching contributor incentives.",
  },
];

const MilestoneTimeline = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-blue-600 text-lg font-semibold mb-2">📈 Milestone Timeline</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Our Journey So Far</h3>
      </div>

      <div className="relative border-l-2 border-blue-500 ml-4 space-y-10">
        {milestones.map((item, index) => (
          <div key={index} className="ml-6 relative">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-[-10px] top-1.5"></div>
            <p className="text-sm text-gray-500">{item.year}</p>
            <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MilestoneTimeline;
