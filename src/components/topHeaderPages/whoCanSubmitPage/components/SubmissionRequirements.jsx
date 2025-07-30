import React from 'react'
import { FaRegFileAlt, FaSitemap, FaShieldAlt, FaLanguage } from 'react-icons/fa'

const requirements = [
    {
        icon: <FaRegFileAlt className="text-[var(--main-color-blue)] text-5xl mb-4" />,
        title: 'Original Work',
        description: 'Submit unique, unpublished cases with proper citations.',
    },
    {
        icon: <FaSitemap className="text-[var(--main-color-blue)] text-5xl mb-4" />,
        title: 'Proper Case Structure',
        description: 'Follow clear flow: Introduction → Problem → Solutions.',
    },
    {
        icon: <FaShieldAlt className="text-[var(--main-color-blue)] text-5xl mb-4" />,
        title: 'No Copyright Issues',
        description: 'Ensure originality and respect copyright rules.',
    },
    {
        icon: <FaLanguage className="text-[var(--main-color-blue)] text-5xl mb-4" />,
        title: 'Language Requirements',
        description: 'Write clearly with correct grammar and professional tone.',
    },
]

const SubmissionRequirements = () => {
    return (
        <section className="dark:bg-[var(--gray-100)] dark:text-[var(--gray-800)] bg-[var(--white-color)] py-14">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-900)] mb-12">
                    Submission <span className="text-[var(--main-color-blue)]">Requirements</span>
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {requirements.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 rounded-lg shadow-md bg-[var(--main-bg)] border border-[var(--gray-200)] hover:shadow-lg hover:border-[var(--main-color-blue)] transition-all duration-300 hover:-translate-y-2"
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

export default SubmissionRequirements
