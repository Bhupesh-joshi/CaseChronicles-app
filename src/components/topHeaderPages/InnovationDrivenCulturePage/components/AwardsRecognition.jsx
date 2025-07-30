import React from "react";

const awards = [
  {
    title: "Digital Innovation in Education",
    description: "Shortlisted for ‘Digital Innovation in Education’ 2024",
    logo: "https://images.pexels.com/photos/9783353/pexels-photo-9783353.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "XYZ Journal Recognition",
    description:
      "Recognized by XYZ Journal for transforming case research methodology",
    logo: "https://images.pexels.com/photos/7688174/pexels-photo-7688174.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Top EdTech Initiative",
    description: "Top 10 finalist in Global EdTech Impact Awards 2023",
    logo: "https://media.istockphoto.com/id/1660945979/photo/edtech-education-technology-distance-learning-online-concept.jpg?b=1&s=612x612&w=0&k=20&c=WSRCg7AzzA5JvY2Db-eeVQBTOaSVYK0LyuSNtovF6Dk=",
  },
];

const AwardsRecognition = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        🏆 Awards & Recognition
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {awards.map((award, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={award.logo}
              alt={award.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
            <p className="text-gray-600 text-sm">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsRecognition;
