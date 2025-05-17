import featuredCasesData from "../data/featuredCasesData";

const FeaturedCases = () => {
    return (
        <div className="bg-[var(--main-bg)] py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-[var(--white-color)] bg-[var(--main-color-blue)] rounded-full mb-4">
                        FEATURED CASES
                    </span>
                    <h2 className="text-4xl font-bold text-[var(--gray-900)]">
                        Top Rated Case Studies
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-[var(--gray-600)]">
                        Explore handpicked case studies from top universities & authors.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-8">
                    {featuredCasesData.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-[var(--white-color)] p-8 rounded-xl shadow-xl border border-[var(--gray-200)] hover:border-[var(--main-color-blue)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >

                            <div className="w-full h-48 rounded-lg overflow-hidden bg-[var(--main-bg)] flex items-center justify-center mb-6">

                                {/* Image */}
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-[var(--gray-900)] mb-3">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[var(--gray-600)] mb-2">{item.description}</p>

                            {/* Author */}
                            <p className="text-sm text-[var(--main-color-blue)] mb-4 italic">{item.author}</p>

                            {/* Button */}
                            <button className="text-[var(--white-color)] py-2 px-4 rounded bg-[var(--main-color-blue)] cursor-pointer hover:bg-[var(--blue-900)] transition-all duration-300">
                                View Case
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedCases;
