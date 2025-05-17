import React, { useState } from 'react';
import faqData from '../data/faqData';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[var(--main-bg)] min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-900)]">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-[var(--gray-600)]">
                        Questions related to web hosting
                    </p>
                </div>

                <div className="bg-[var(--white-color)] border border-[var(--gray-200)] rounded-lg divide-y divide-[var(--gray-200)]">
                    {(showAll ? faqData : faqData.slice(0, 3)).map((faq, index) => (
                        <div key={index}>
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left px-5 py-4 focus:outline-none"
                            >
                                <span className="text-lg font-medium text-[var(--gray-800)] cursor-pointer">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 text-[var(--gray-500)] transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {openIndex === index && (
                                <div className="px-5 pb-4 text-[var(--gray-600)]">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {faqData.length > 3 && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-6 py-2 rounded-full bg-[var(--main-color-blue)] text-[var(--white-color)] font-medium hover:bg-[var(--main-color-blue)] transition"
                        >
                            {showAll ? "See Less" : "See More"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FAQSection;
