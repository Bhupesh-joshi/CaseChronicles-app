import React from "react";

const AboutCEO = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10">
          👤 About Our CEO
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* CEO Image */}
          <div className="flex-shrink-0">
            <img
              src="https://yt3.googleusercontent.com/TpJkSGUO0yaLKOiJQ6zM3Tir-Cd6uj9SkEtTz8I-X5_lI_EED9AbAQV9uyql7N5Ohudef4vMhA=s160-c-k-c0x00ffffff-no-rj"
              alt="Bhupesh Joshi"
              className="w-72 h-auto rounded-2xl shadow-md object-cover"
            />
          </div>

          {/* CEO Bio */}
          <div className="text-gray-700 max-w-2xl">
            <h3 className="text-2xl font-semibold mb-2">
              Bhupesh Joshi – Founder & CEO
            </h3>

            <p className="mb-4">
              Bhupesh is a visionary entrepreneur with a deep commitment to reshaping education through technology. He holds a Master's degree in Computer Applications and has over 5 years of experience in the EdTech and business sectors.
            </p>

            <p className="mb-4">
              Under his leadership, the platform has grown into a trusted source for globally diverse and high-impact case studies. Bhupesh has also been featured in reputed educational journals and tech magazines for his innovative approach to learner-centered design.
            </p>

            <p className="mb-4">
              Recognized with awards like <span className="font-medium text-indigo-600">"Top 30 Under 30 – Education Innovators"</span>, he continues to push boundaries by combining research, real-world relevance, and accessibility.
            </p>

            <p>
              His mission is clear: <span className="italic text-indigo-800">“To make knowledge transformative and universally accessible.”</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCEO;
