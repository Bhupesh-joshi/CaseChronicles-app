import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiJavascript } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
];

const TechStackSection = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          🛠 Tech Stack We Use
        </h2>
        <p className="mb-10 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Our platform is built using modern and scalable technologies that ensure speed, reliability, and seamless experience.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <div className="text-5xl mb-2">{tech.icon}</div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
