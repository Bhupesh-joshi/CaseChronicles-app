import React from "react";

const timeline = [
  {
    year: "2021",
    title: "The Spark",
    description: "Identified a gap in case-based learning during real-world projects.",
  },
  {
    year: "2022",
    title: "The Start",
    description: "Launched the MVP platform with limited case submissions.",
  },
  {
    year: "2023",
    title: "Community Growth",
    description: "Onboarded 5,000+ users and experts from multiple domains.",
  },
  {
    year: "2024",
    title: "Scaling Up",
    description: "Introduced research tools and deep-dive discussion boards.",
  },
  {
    year: "2025",
    title: "The Future",
    description: "Becoming a global destination for transformative learning.",
  },
];

const MissionTimeline = () => {
  return (
    <section className="py-10 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Our Mission Journey</h2>
      <div className="relative border-l-4 border-blue-600">
        {timeline.map((item, index) => (
          <div key={index} className="mb-10 ml-4">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-1.5"></div>
            <h3 className="text-xl font-semibold">{item.year} - {item.title}</h3>
            <p className="text-gray-600 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionTimeline;
