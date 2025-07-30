import React from "react";

const challenges = [
  {
    title: "🚧 Initial Roadblocks",
    description:
      "Starting from scratch, we faced challenges in choosing the right tech stack, setting realistic goals, and aligning our vision with execution.",
  },
  {
    title: "💬 Community Feedback",
    description:
      "Early users helped us see what was missing. Their honest feedback shaped features, improved UX, and made the platform more usable.",
  },
  {
    title: "📈 Scaling the Platform",
    description:
      "As submissions grew, our system struggled with performance. We had to rethink architecture and optimize database queries for scalability.",
  },
  {
    title: "🎯 Overcoming Challenges",
    description:
      "Through perseverance, constant learning, and user-first thinking, we overcame obstacles — and we’re still improving, every day.",
  },
];

const ChallengesSection = () => {
  return (
    <section
      className="py-16 px-6 md:px-20 bg-gradient-to-br from-white to-gray-100"
      id="challenges"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Every Journey Has Its Trials
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto text-lg">
          The road wasn’t always smooth — here’s how we tackled it all.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {challenges.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-indigo-500"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-700">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengesSection;
