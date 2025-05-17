import React from "react";
// import whyChooseUsData from "../data/whyChooseUsData";

const WhyChooseUs = ({ mainTitle, subTitle, learningResources, whyChooseUsData }) => {

    const data = learningResources || whyChooseUsData;

    return (
        <section className="bg-[var(--white-color)] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[var(--gray-900)]">
                    {mainTitle}
                    </h2>
                    <p className="max-w-xl mx-auto mt-3 text-[var(--gray-600)]">
                    {subTitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 mt-12 px-8">
                    {data?.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-4 items-start p-4 border border-[var(--gray-200)] rounded-lg bg-[var(--white-color)] 
                            shadow-xl hover:border-[var(--main-color-blue)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2
                            "
                        >
                            <div className={`${item.iconBg} bg-[var(--blue-100)] p-3 rounded-full`}>
                                <item.icon className="text-[2.5rem]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-[var(--gray-800)]">
                                    {item.title}
                                </h3>
                                <p className="text-[var(--gray-500)] mt-1">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
