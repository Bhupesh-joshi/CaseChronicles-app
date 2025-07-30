import React from "react";
import {
  FaGlobe,
  FaBook,
  FaComments,
  FaPenFancy,
  FaAward,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaAward className="text-white text-2xl" />,
    title: "Recognition in Academic Community",
    description:
      "Get acknowledged by peers and institutions for your valuable contributions.",
    bgColor: "bg-indigo-500",
  },
  {
    icon: <FaGlobe className="text-white text-2xl" />,
    title: "Global Exposure",
    description:
      "Reach a worldwide audience and let your work inspire future researchers.",
    bgColor: "bg-green-500",
  },
  {
    icon: <FaBook className="text-white text-2xl" />,
    title: "Contribute to Educational Resources",
    description:
      "Be a part of shaping academic content used by students and educators.",
    bgColor: "bg-yellow-500",
  },
  {
    icon: <FaComments className="text-white text-2xl" />,
    title: "Speaking & Networking Opportunities",
    description:
      "Get invited to events, webinars, and grow your professional network.",
    bgColor: "bg-blue-500",
  },
  {
    icon: <FaPenFancy className="text-white text-2xl" />,
    title: "Build Your Publication Portfolio",
    description:
      "Enhance your resume with verified and published academic work.",
    bgColor: "bg-pink-500",
  },
];

const BenefitCards = () => {
  return (
    <section className="py-10 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Why Submit Your Case?
        </h2>
        <p className="text-gray-600 text-lg">
          Unlock exclusive benefits and make your work count.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${benefit.bgColor}`}
            >
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitCards;
