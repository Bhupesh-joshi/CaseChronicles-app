import React from 'react'

const WhoCanSubmitIntro = () => {
    return (
        <section className="dark:bg-[var(--gray-100)] dark:text-[var(--gray-800)] bg-[var(--main-bg)] py-14">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col justify-center text-center">
                <div className="flex flex-col justify-center items-center lg:max-w-3xl mx-auto">

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--gray-900)] mb-6">
                        Submit Your Case Studies and <span className="text-[var(--main-color-blue)]">Inspire Learning</span>
                    </h1>

                    {/* Intro Paragraph */}
                    <p className="text-lg md:text-xl text-[var(--gray-600)]">
                        Share your real-world experiences and insights by submitting case studies.
                        Your contribution will not only inspire thousands of learners but also foster
                        a community of knowledge sharing and practical learning.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default WhoCanSubmitIntro
