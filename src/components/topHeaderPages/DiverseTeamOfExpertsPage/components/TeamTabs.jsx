import React, { useState } from "react";

const teamData = {
  "Leadership Team": [
    { name: "Amit Sharma", role: "Founder & CEO", img: "https://via.placeholder.com/150" },
    { name: "Ritika Rao", role: "Director of Strategy", img: "https://via.placeholder.com/150" },
  ],
  "Medical Experts": [
    { name: "Dr. Neha Verma", role: "Pediatrician", img: "https://via.placeholder.com/150" },
  ],
  "Education Specialists": [
    { name: "Rohit Bansal", role: "Curriculum Designer", img: "https://via.placeholder.com/150" },
  ],
  "Outreach Coordinators": [
    { name: "Anjali Singh", role: "Community Lead", img: "https://via.placeholder.com/150" },
  ],
  "Volunteers": [
    { name: "Karan Mehta", role: "Field Volunteer", img: "https://via.placeholder.com/150" },
  ],
  "Advisors": [
    { name: "Dr. Meenakshi Pillai", role: "Advisor - Policy", img: "https://via.placeholder.com/150" },
  ],
};

const TeamTabs = () => {
  const categories = Object.keys(teamData);
  const [selectedTab, setSelectedTab] = useState("Leadership Team");

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedTab(category)}
              className={`px-4 py-2 rounded-lg border transition ${
                selectedTab === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Team Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {teamData[selectedTab].map((member, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamTabs;
