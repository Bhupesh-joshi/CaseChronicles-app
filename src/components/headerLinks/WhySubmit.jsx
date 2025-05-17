import React from 'react'
import { FaGlobe, FaUserGraduate, FaBookOpen, FaCertificate } from 'react-icons/fa'

const points = [
    {
        icon: <FaGlobe className="text-5xl text-[var(--main-color-blue)] mb-4" />,
        title: 'Reach Wider Learners',
        description: 'Share your expertise with a global academic community.',
    },
    {
        icon: <FaUserGraduate className="text-5xl text-[var(--main-color-blue)] mb-4" />,
        title: 'Build Your Profile',
        description: 'Boost your academic or professional visibility.',
    },
    {
        icon: <FaBookOpen className="text-5xl text-[var(--main-color-blue)] mb-4" />,
        title: 'Contribute to Education',
        description: 'Help shape the future of education and case-based learning.',
    },
    {
        icon: <FaCertificate className="text-5xl text-[var(--main-color-blue)] mb-4" />,
        title: 'Certification (Optional)',
        description: 'Earn a certification for your contribution.',
    },
]

const WhySubmit = () => {
    return (
        <section className="dark:bg-[var(--gray-100)] dark:text-[var(--gray-800)] bg-[var(--white-color)] py-14">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-900)] mb-12">
                    Why Submit with <span className="text-[var(--main-color-blue)]">Case Chronicles</span>?
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {points.map((point, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 rounded-lg shadow-md bg-[var(--main-bg)] border border-[var(--gray-200)] hover:shadow-lg hover:border-[var(--main-color-blue)] transition-all duration-300 hover:-translate-y-2"
                        >
                            {point.icon}
                            <h3 className="text-xl font-semibold text-[var(--gray-900)]">{point.title}</h3>
                            <p className="text-[var(--gray-600)] mt-2 text-center text-sm">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhySubmit
