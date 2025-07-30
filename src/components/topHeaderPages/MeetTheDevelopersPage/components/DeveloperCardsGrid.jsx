import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const developers = [
  {
    name: "Bhupesh Joshi",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/150", // replace with real image
    github: "https://github.com/bhupesh-joshi",
    linkedin: "https://linkedin.com/in/bhupesh-joshi",
    quote: "Turning ideas into elegant UI magic ✨",
  },
  {
    name: "Aarav Sharma",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
    github: "https://github.com/aarav-dev",
    linkedin: "https://linkedin.com/in/aarav-sharma",
    quote: "APIs, servers & logic—my playground 🛠️",
  },
  {
    name: "Sneha Verma",
    role: "Full Stack Developer",
    image: "https://via.placeholder.com/150",
    github: "https://github.com/sneha-verma",
    linkedin: "https://linkedin.com/in/sneha-verma",
    quote: "Building from database to browser 🌐",
  },
];

const DeveloperCardsGrid = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">👨‍💻 Meet Our Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={dev.image}
              alt={dev.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-500"
            />
            <h3 className="text-xl font-semibold text-gray-800">{dev.name}</h3>
            <p className="text-indigo-600 mb-2">{dev.role}</p>
            <p className="text-gray-500 italic text-sm mb-4">"{dev.quote}"</p>
            <div className="flex justify-center gap-4">
              <a
                href={dev.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href={dev.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 hover:text-black text-xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeveloperCardsGrid;
