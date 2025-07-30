import React from "react";

const MissionStatement = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://cdn-icons-png.flaticon.com/512/2649/2649765.png')] bg-no-repeat bg-center opacity-10" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🎯 Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            “To empower learners and educators by providing access to impactful, high-quality, and globally diverse case studies.”
          </p>
          <ul className="text-left list-disc list-inside text-gray-700 space-y-2">
            <li>Deliver real-world learning experiences</li>
            <li>Encourage cross-disciplinary thinking</li>
            <li>Promote innovation in education</li>
            <li>Support academic and professional growth</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
