import React from "react";

const CeoMessage = () => {
  return (
    <section className="bg-white py-12 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          ✍️ CEO’s Message
        </h2>

        <div className="bg-gray-100 p-6 sm:p-10 rounded-xl shadow-md">
          <p className="text-gray-800 text-lg leading-relaxed mb-6 font-serif">
            Dear Learners, Educators, and Partners,
          </p>

          <p className="text-gray-700 text-base leading-7 mb-4">
            When I started this journey, I didn’t know how impactful it would become. What began as a solo effort soon turned into a growing movement of learners, educators, and changemakers who all believe in the power of real-world stories to educate.
          </p>

          <p className="text-gray-700 text-base leading-7 mb-4">
            My motivation came from observing the gaps in traditional education – the lack of context, engagement, and relatability. I wanted to build a platform that bridges that gap using case studies that inspire, inform, and transform.
          </p>

          <p className="text-gray-700 text-base leading-7 mb-4">
            There were challenges. From building the first prototype to convincing others of this vision – it took time, effort, and belief. But every step was worth it because of the incredible community that stood by us.
          </p>

          <p className="text-gray-700 text-base leading-7 mb-4">
            Today, our mission is clear: to democratize access to high-impact, globally diverse case-based learning. And this is just the beginning. We're working on AI-assisted case generation, global partnerships, and deep personalization to make your experience even richer.
          </p>

          <p className="text-gray-700 text-base leading-7 mb-6">
            Thank you for being a part of this journey. Whether you're a learner seeking insight or a partner driving impact, you make this platform what it is.
          </p>

          <p className="text-gray-800 font-semibold text-base mt-6">
            With gratitude,
          </p>
          <p className="text-gray-900 font-bold text-lg">Bhupesh Joshi</p>
          <p className="text-gray-600 text-sm">Founder & CEO</p>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
