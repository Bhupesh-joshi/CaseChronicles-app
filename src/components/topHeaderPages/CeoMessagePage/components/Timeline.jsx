import React from "react";

const Timeline = ({ events }) => {
  return (
    <div className="bg-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Career Highlights
        </h2>

        <div className="relative border-l-4 border-blue-600 pl-6 space-y-10">
          {events.map((event, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                <span className="text-sm text-gray-500">{event.date}</span>
                <p className="mt-2 text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
