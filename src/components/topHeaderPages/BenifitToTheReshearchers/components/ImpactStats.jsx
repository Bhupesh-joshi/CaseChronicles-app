const stats = [
  { value: "1200+", label: "Researchers Participated" },
  { value: "80+", label: "Countries Represented" },
  { value: "5K+", label: "Published Case Studies" },
];

const ImpactStats = () => {
  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-2xl font-bold mb-6">Our Impact So Far</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-3xl font-bold text-blue-700">{stat.value}</div>
            <div className="text-gray-700">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
