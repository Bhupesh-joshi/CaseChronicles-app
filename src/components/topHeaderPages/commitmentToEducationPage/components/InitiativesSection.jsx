import React from "react";

const initiatives = [
  {
    image: "https://images.pexels.com/photos/8199557/pexels-photo-8199557.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Scholarship Programs",
    description: "Providing financial aid to meritorious and underprivileged students across the country.",
  },
  {
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Free Workshops & Webinars",
    description: "Hosting interactive sessions for students and educators to enhance their skills.",
  },
  {
    image: "https://images.pexels.com/photos/28688219/pexels-photo-28688219/free-photo-of-speaker-engaging-audience-in-cdmx-gathering.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Learning Platforms",
    description: "Building digital platforms that ensure quality and accessible education for all.",
  },
  {
    image: "https://images.pexels.com/photos/31922550/pexels-photo-31922550/free-photo-of-outdoor-volunteer-team-meeting-in-rural-setting.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Rural Outreach",
    description: "Reaching remote areas to bridge the education gap with resources and training.",
  },
];

const InitiativesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Educational Initiatives</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We are committed to driving impactful change through targeted educational programs and outreach efforts.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md hover:shadow-lg transition rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
