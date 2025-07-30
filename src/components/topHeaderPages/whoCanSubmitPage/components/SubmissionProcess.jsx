import React from 'react'
import { FaClipboardList, FaPaperPlane, FaClock, FaCheckCircle } from 'react-icons/fa'

const steps = [
    {
        icon: <FaClipboardList className="text-5xl text-[var(--main-color-blue)] mb-4" />,
        title: 'Prepare Your Case',
        description: 'Follow our guidelines while preparing your case.',
    },
    {
        icon: <FaPaperPlane className="text-5xl text-[var(--main-color-blue)] mb-4" />,
        title: 'Submit Form/Email',
        description: 'Submit online or via email easily.',
    },
    {
        icon: <FaClock className="text-5xl text-[var(--main-color-blue)] mb-4" />,
        title: 'Review Process',
        description: 'Review within 2–4 weeks by our team.',
    },
    {
        icon: <FaCheckCircle className="text-5xl text-[var(--main-color-blue)] mb-4" />,
        title: 'Approval & Publishing',
        description: 'Approved cases are published on our platform.',
    },
]

const SubmissionProcess = () => {
    return (
        <section className="dark:bg-[var(--gray-100)] dark:text-[var(--gray-800)] bg-[var(--white-color)] py-14">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-900)] mb-12">
                    Submission <span className="text-[var(--main-color-blue)]">Process</span>
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 rounded-lg shadow-md bg-[var(--main-bg)] border border-[var(--gray-200)] hover:shadow-lg hover:border-[var(--main-color-blue)] transition-all duration-300 hover:-translate-y-2"
                        >
                            {step.icon}
                            <h3 className="text-xl font-semibold text-[var(--gray-900)]">{step.title}</h3>
                            <p className="text-[var(--gray-600)] mt-2 text-center text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SubmissionProcess
