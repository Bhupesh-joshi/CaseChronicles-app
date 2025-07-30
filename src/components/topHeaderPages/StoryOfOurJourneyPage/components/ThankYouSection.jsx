import React from "react";

const ThankYouSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">A Solo Build, But Not Alone</h2>
      <p className="max-w-2xl mx-auto text-gray-700 mb-6">
        This journey wouldn't have been possible without the unwavering support
        of my mentors, friends, and the amazing CaseCentre community. To every
        user, contributor, and well-wisher — thank you for believing in the
        vision.
      </p>

      <p className="text-gray-600 italic mb-4">
        “Designed, built, and maintained by Bhupesh Joshi.”
      </p>

      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <img
          src="https://yt3.googleusercontent.com/TpJkSGUO0yaLKOiJQ6zM3Tir-Cd6uj9SkEtTz8I-X5_lI_EED9AbAQV9uyql7N5Ohudef4vMhA=s160-c-k-c0x00ffffff-no-rj"
          alt="Bhupesh Joshi"
          className="w-24 h-24 rounded-full border-4 border-white shadow-md"
        />
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 text-gray-600 text-xl">
        <a
          href="https://www.linkedin.com/in/bhupeshjoshi2"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/bhupesh-joshi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="mailto:bhupesh@example.com"
          className="hover:text-red-500"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default ThankYouSection;
