// CallToAction.jsx
import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-blue-50 py-12 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Join our mission to revolutionize education
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Together, we can create a future where learning is accessible, empowering, and transformative.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Involved
          </button>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Volunteer
          </button>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
            Donate
          </button>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
            Explore Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
