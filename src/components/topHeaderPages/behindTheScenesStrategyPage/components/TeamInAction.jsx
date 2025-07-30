import React from "react";

const teamMembers = [
  {
    name: "Aarav Mehta",
    role: "Frontend Developer",
    contribution: "Built dynamic user interfaces and dashboards.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Sanya Kapoor",
    role: "UI/UX Designer",
    contribution: "Designed the entire product flow and mockups.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ravi Joshi",
    role: "Backend Developer",
    contribution: "Managed APIs, databases, and server integration.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Neha Sharma",
    role: "Project Manager",
    contribution: "Coordinated teams and tracked delivery milestones.",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];

const TeamInAction = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">Team in Action</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition hover:scale-105 duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-blue-600 font-medium">{member.role}</p>
            <p className="mt-2 text-gray-600 text-sm">{member.contribution}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamInAction;
