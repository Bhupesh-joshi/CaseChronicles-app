import React from "react";

const VisionStatement = () => {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-pink-100 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Icon or Image */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-purple-200 rounded-full flex items-center justify-center text-5xl md:text-6xl text-purple-700 shadow-lg">
            👁️
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-lg md:text-xl text-gray-700 font-medium italic">
            “To become the global hub for transformative learning through real-world case-based knowledge.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionStatement;
