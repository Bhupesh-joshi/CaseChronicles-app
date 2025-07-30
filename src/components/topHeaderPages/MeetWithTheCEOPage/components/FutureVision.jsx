import React from "react";

const FutureVision = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-700">📈 Founder’s Vision for the Future</h2>
        <p className="text-lg sm:text-xl mb-10 text-gray-600">
          A roadmap to a better learning ecosystem, powered by real stories and strong partnerships.
        </p>

        <div className="grid gap-8 md:grid-cols-3 text-left">
          {/* 1-Year Goal */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">🗓️ 1-Year Goal</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Launch 500+ curated global case studies</li>
              <li>Partner with 100+ institutions</li>
              <li>Build a community of 10,000 learners</li>
            </ul>
          </div>

          {/* 5-Year Vision */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-3">🚀 5-Year Vision</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Become the world’s largest open-access case study hub</li>
              <li>Integrate AI-driven recommendations for personalized learning</li>
              <li>Expand across 20+ languages & regional markets</li>
            </ul>
          </div>

          {/* Community Focus */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">🤝 Community Focus</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Empower students with practical thinking</li>
              <li>Bridge the gap between academia and industry</li>
              <li>Create a collaborative global learning culture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
