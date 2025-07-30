// components/OurStory.jsx

import React from "react";

const OurStory = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Our Story
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          CaseChronicles was born out of a simple idea — to bridge the gap between theoretical learning and real-world understanding. Founded by passionate educators and professionals, we realized that students learn best through storytelling — especially stories grounded in reality.
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our founder, who spent years working at the intersection of academia and industry, saw firsthand how disconnected traditional education was from actual decision-making environments. That’s why CaseChronicles was built — to make learning more immersive, applied, and insightful.
        </p>

        {/* Timeline */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Timeline</h3>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-10">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full mb-2"></div>
              <p className="text-gray-600 font-medium">2023</p>
              <p className="text-sm text-gray-500">Concept Started</p>
            </div>
            <div className="h-1 w-full sm:w-32 bg-blue-300 sm:mx-4 my-4 sm:my-0"></div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full mb-2"></div>
              <p className="text-gray-600 font-medium">2024</p>
              <p className="text-sm text-gray-500">Research & Content Development</p>
            </div>
            <div className="h-1 w-full sm:w-32 bg-blue-300 sm:mx-4 my-4 sm:my-0"></div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full mb-2"></div>
              <p className="text-gray-600 font-medium">2025</p>
              <p className="text-sm text-gray-500">Official Launch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
