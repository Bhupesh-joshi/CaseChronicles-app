import React from "react";

const steps = [
  {
    year: "Step 1",
    title: "Research",
    description: "Market analysis, competitor studies, and customer feedback collection.",
  },
  {
    year: "Step 2",
    title: "Planning",
    description: "Set strategic goals, allocate resources, and define KPIs.",
  },
  {
    year: "Step 3",
    title: "Execution",
    description: "Implement plans across departments with regular sync-ups.",
  },
  {
    year: "Step 4",
    title: "Feedback",
    description: "Analyze results, gather feedback, and iterate for improvements.",
  },
];

const StrategyTimeline = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">Strategy Roadmap</h2>

      <div className="relative border-l-4 border-blue-500 ml-4">
        {steps.map((step, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute -left-5 w-10 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold text-sm shadow-md">
              {index + 1}
            </div>

            <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
            <span className="text-sm text-blue-600 font-medium">{step.year}</span>
            <p className="mt-2 text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategyTimeline;
