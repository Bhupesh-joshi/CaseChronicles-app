import React from "react";
import { Link } from "react-router";

const CallToAction = () => {
    return (
        <section
            className="py-16 px-4"
            style={{
                backgroundImage: "linear-gradient(to right, #4e45d5, #3b35b2)",
                color: "var(--white-color)",
            }}
        >
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Explore the World's Best Case Studies?
                </h2>
                <p className="text-xl md:text-2xl text-[var(--white-color)]/80 mb-10 max-w-3xl mx-auto">
                Get access to handpicked, industry-approved case studies and boost
                your learning journey.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="./login"
                        className="bg-[var(--white-color)] text-[var(--main-color-blue)] hover:bg-[var(--gray-100)] px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Get Started Now
                    </Link>
                    <Link
                        to="/signup"
                        className="border-2 border-[var(--white-color)] text-[var(--white-color)] hover:bg-[var(--white-color)] hover:text-[var(--main-color-blue)] px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105"
                    >
                        Write Cases
                    </Link>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0">
                    <div className="flex -space-x-2">
                        <img
                            className="h-10 w-10 rounded-full border-2 border-[var(--white-color)]"
                            src="https://randomuser.me/api/portraits/women/12.jpg"
                            alt="Customer"
                        />
                        <img
                            className="h-10 w-10 rounded-full border-2 border-[var(--white-color)]"
                            src="https://randomuser.me/api/portraits/men/43.jpg"
                            alt="Customer"
                        />
                        <img
                            className="h-10 w-10 rounded-full border-2 border-[var(--white-color)]"
                            src="https://randomuser.me/api/portraits/women/34.jpg"
                            alt="Customer"
                        />
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="text-[var(--white-color)]/90 font-medium">
                            Loved by 5000+ Happy Customers
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;




