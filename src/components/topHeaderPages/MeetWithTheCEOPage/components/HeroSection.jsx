import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      {/* Text Content */}
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Mr. Bhupesh Joshi
        </h2>
        <p className="text-lg text-indigo-600 font-semibold mb-4">
          Founder & CEO
        </p>
        <p className="text-gray-700 text-lg italic mb-6">
          “I believe education can truly change lives – when stories are shared with purpose.”
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => navigate("/ceo-message")}
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300"
          >
            Read Full Message
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-50 transition-all duration-300"
          >
            Request a Meeting
          </button>
        </div>
      </div>

      {/* CEO Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src="/ceo.jpg" // 🖼 Replace with your actual image path
          alt="Bhupesh Joshi"
          className="rounded-2xl shadow-lg w-64 h-64 object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
