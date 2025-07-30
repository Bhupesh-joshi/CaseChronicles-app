import React from "react";

const TheSpark = () => {
  return (
    <section className="w-full py-16 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Illustration (optional bulb/plan) */}
        <div className="flex justify-center">
          <div className="w-60 h-60 bg-white rounded-full shadow-lg flex items-center justify-center">
            <span className="text-6xl">💡</span>
          </div>
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="text-lg text-blue-600 font-semibold mb-2">The Beginning</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            How CaseCentre Started
          </h3>
          <p className="text-gray-700 mb-4">
            CaseCentre was born from a simple yet powerful idea: <br />
            to make high-quality, real-world business case studies easily accessible
            to learners and educators worldwide.
          </p>
          <p className="text-gray-700 mb-4">
            We saw that traditional case study platforms were either too expensive,
            too academic, or simply not relatable to modern, real-world startup and business challenges.
          </p>
          <p className="italic text-gray-600 border-l-4 border-blue-500 pl-4">
            “I realized there was a huge gap between textbook theory and actual startup challenges — that’s when CaseCentre was born.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheSpark;
