import React from "react";

const QuoteBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 py-16 px-4 sm:px-8 md:px-16 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold italic leading-relaxed">
          “Leadership is not about being in charge. It is about taking care of those in your charge.”
        </p>
        <p className="mt-4 text-lg sm:text-xl font-medium text-gray-100">
          – Simon Sinek
        </p>
      </div>
    </section>
  );
};

export default QuoteBanner;
