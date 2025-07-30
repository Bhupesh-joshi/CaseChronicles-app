import React from "react";

const PageIntro = () => {
  return (
    <section
      className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-2xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Our Journey So Far
        </h1>
        <p className="text-lg md:text-xl mb-6">
          From an Idea to Impactful Reality
        </p>
        <button className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transform transition duration-300">
          Explore Our Story
        </button>
      </div>
    </section>
  );
};

export default PageIntro;
