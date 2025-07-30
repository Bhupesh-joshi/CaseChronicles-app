import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const ConnectWithCEO = () => {
  return (
    <div className="bg-gray-100 py-14 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Connect with Our CEO</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* CEO Image */}
          <img
            src="https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual CEO image URL
            alt="CEO"
            className="w-52 h-52 rounded-full object-cover shadow-md"
          />

          {/* CEO Details + Links */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">John Doe</h3>
            <p className="text-lg text-gray-600">Chief Executive Officer</p>

            <div className="flex justify-center md:justify-start gap-6 mt-4 text-2xl">
              <a
                href="https://www.linkedin.com/in/ceo-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/ceo-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:ceo@example.com"
                className="text-red-500 hover:text-red-700 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithCEO;
