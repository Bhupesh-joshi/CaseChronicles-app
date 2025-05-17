import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { Link } from 'react-router'

const SubmitCTA = () => {
    return (
        <section className="bg-[var(--main-color-blue)] text-[var(--white-color)] py-16">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Make an Impact?
                </h2>
                <p className="text-lg mb-8">
                    Submit your case and join a global community of educators and professionals.
                </p>
                <Link
                    to="/submit"  // <-- Yahan form ka URL ya email address doge
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--white-color)] text-[var(--main-color-blue)] font-semibold rounded-full shadow-lg hover:bg-[var(--gray-200)] transition duration-300 text-lg"
                >
                    <FaPaperPlane /> Submit Your Case
                </Link>
            </div>
        </section>
    )
}

export default SubmitCTA
