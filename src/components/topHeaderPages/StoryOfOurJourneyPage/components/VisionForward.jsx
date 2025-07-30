import React from "react";

const VisionForward = () => {
  return (
    <section className="bg-gradient-to-br from-[#e6f0ff] to-[#ffffff] py-16 px-6 sm:px-10 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">The Vision Forward</h2>
        <p className="text-lg text-gray-600 mb-10">Where We’re Headed</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Future Features</h3>
            <p className="text-gray-600">
              We're working on smart recommendation systems, submission auto-tagging, and better peer review experiences.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expanding Submission Types</h3>
            <p className="text-gray-600">
              Beyond case studies — we aim to support research papers, whitepapers, and audio-visual content.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Building a Research-Focused Community</h3>
            <p className="text-gray-600">
              We envision a vibrant network of students, professors, and institutions collaborating on ideas and learning.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Long-Term Goals</h3>
            <p className="text-gray-600">
              Creating a platform where every impactful idea gets a spotlight — regionally and globally.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <blockquote className="italic text-gray-700 text-lg">
            "CaseCentre is more than a platform — it's a movement to democratize knowledge and elevate innovation."
          </blockquote>
          <p className="mt-2 font-semibold text-blue-600">— Bhupesh Joshi, Visionary & Developer</p>
        </div>
      </div>
    </section>
  );
};

export default VisionForward;
