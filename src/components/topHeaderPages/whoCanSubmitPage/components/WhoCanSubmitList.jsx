import React from 'react'
import { FaUserGraduate, FaChalkboardTeacher, FaLightbulb, FaBalanceScale, FaBuilding } from 'react-icons/fa'

const submitters = [
    {
        icon: <FaUserGraduate className="text-[var(--main-color-blue)] text-5xl mb-4" />,
        title: 'University Students & Researchers',
        description: 'Share your academic projects and research insights.',
    },
    {
        icon: <FaChalkboardTeacher className="text-[var(--main-color-blue)] text-5xl mb-4" />,
        title: 'Teachers & Curriculum Designers',
        description: 'Enrich learning by sharing practical classroom experiences.',
    },
    {
        icon: <FaLightbulb className="text-[var(--main-color-blue)] text-5xl mb-4" />,
        title: 'Entrepreneurs & Consultants',
        description: 'Transform business challenges into valuable learning tools.',
    },
    {
        icon: <FaBalanceScale className="text-[var(--main-color-blue)] text-5xl mb-4" />,
        title: 'Policy Analysts & NGO Workers',
        description: 'Document social impact stories and policy innovations.',
    },
    {
        icon: <FaBuilding className="text-[var(--main-color-blue)] text-5xl mb-4" />,
        title: 'Corporate Professionals & Industry Leaders',
        description: 'Share real-world business transformations and strategies.',
    },
]

const WhoCanSubmitList = () => {
    return (
        <section className="dark:bg-[var(--gray-100)] dark:text-[var(--gray-800)] bg-[var(--white-color)] py-14">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-900)] mb-12">
                    Who Can <span className="text-[var(--main-color-blue)]">Submit</span>
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {submitters.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 rounded-lg bg-[var(--main-bg)] shadow-md border border-[var(--gray-200)] hover:shadow-lg hover:border-[var(--main-color-blue)] transition-all duration-300 hover:-translate-y-2"
                        >
                            {item.icon}
                            <h3 className="text-xl font-semibold text-[var(--gray-900)]">{item.title}</h3>
                            <p className="text-[var(--gray-600)] mt-2 text-center text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhoCanSubmitList
