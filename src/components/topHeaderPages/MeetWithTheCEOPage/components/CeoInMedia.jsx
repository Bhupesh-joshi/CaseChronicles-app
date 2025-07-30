import React from "react";

const mediaMentions = [
  {
    name: "LinkedIn",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    title: "How Our CEO Uses LinkedIn to Inspire Thousands",
    link: "https://www.linkedin.com/in/your-ceo-profile",
  },
  {
    name: "Forbes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Forbes_logo.svg",
    title: "Featured in Forbes: Disrupting Traditional Education",
    link: "https://www.forbes.com/your-ceo-feature",
  },
  {
    name: "YourStory",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/YourStory_Logo.png",
    title: "From Student to Founder: The Journey of Our CEO",
    link: "https://yourstory.com/your-article-link",
  },
  {
    name: "Spotify",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
    title: "Podcast: Building EdTech with Empathy",
    link: "https://open.spotify.com/show/your-podcast",
  },
];

const CeoInMedia = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          📣 CEO in Media
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mediaMentions.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center hover:shadow-md transition p-4 border rounded-xl"
            >
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className="h-12 w-auto mb-4 object-contain"
              />
              <p className="text-gray-700 font-medium">{item.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CeoInMedia;
