// components/HeroAbout.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const HeroAbout = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/cases");
  };

  const handleJoinClick = () => {
    navigate("/join-us");
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-center px-4 sm:px-8"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/8371732/pexels-photo-8371732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="bg-[#000000a1] bg-opacity-60 w-full h-full absolute top-0 left-0 z-0" />

      <div className="relative z-10 text-center text-white max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About CaseChronicles
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Empowering learning through real-world case studies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleExploreClick}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Explore Cases
          </button>
          <button
            onClick={handleJoinClick}
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
