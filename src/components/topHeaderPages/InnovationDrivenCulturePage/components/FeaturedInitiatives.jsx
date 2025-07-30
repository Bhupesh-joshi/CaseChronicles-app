import React from "react";

const initiatives = [
  {
    title: "Interactive Case Simulations",
    description:
      "We developed gamified, interactive case simulations now used in 30+ B-schools worldwide.",
    image: "https://via.placeholder.com/400x250",
    link: "#",
    cta: "View Simulation"
  },
  {
    title: "Co-Creation Platform",
    description:
      "Launched a real-time case co-creation platform, enabling academics and students to build cases together.",
    image: "https://via.placeholder.com/400x250",
    link: "#",
    cta: "Explore Platform"
  },
  {
    title: "AI-Powered Content Suggestions",
    description:
      "Built an AI system that recommends cases based on learner behavior and previous interests.",
    image: "https://via.placeholder.com/400x250",
    link: "#",
    cta: "See How It Works"
  }
];

const FeaturedInitiatives = () => {
  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Real Innovation in Action</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {initiatives.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-t-2xl w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    className="inline-block mt-2 text-blue-600 font-medium hover:underline"
                  >
                    {item.cta}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInitiatives;
