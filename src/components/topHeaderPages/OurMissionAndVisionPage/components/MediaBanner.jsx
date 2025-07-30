import React from 'react';

const MediaBanner = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden rounded-2xl shadow-lg my-8">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://cdn.pixabay.com/video/2024/02/22/201730-917489786_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Together, Growing Together</h2>
        <p className="max-w-2xl text-lg md:text-xl font-medium">
          Fueling collaboration and curiosity through impactful educational experiences. Let’s shape the future of learning together.
        </p>
      </div>
    </section>
  );
};

export default MediaBanner;
