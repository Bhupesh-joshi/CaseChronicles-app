import React from "react";

const values = [
  {
    iconClass: "fas fa-hand-holding-heart text-red-500",
    title: "Empathy",
    description: "We understand the needs of every life we serve."
  },
  {
    iconClass: "fas fa-users text-blue-500",
    title: "Collaboration",
    description: "We believe in teamwork — together, we create impact."
  },
  {
    iconClass: "fas fa-lightbulb text-yellow-500",
    title: "Innovation",
    description: "We find smart, scalable ways to solve problems."
  },
  {
    iconClass: "fas fa-globe text-green-500",
    title: "Inclusion",
    description: "We serve all beings equally — no discrimination."
  }
];

const TeamValues = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <div className="mb-4 flex justify-center">
              <i className={`${value.iconClass} text-3xl`}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p className="text-sm text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamValues;
