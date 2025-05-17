const Newsletter = () => {
    return (
        <section className="bg-[var(--main-bg)] py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-[var(--main-color-blue)] mb-4">
                    Subscribe to our Newsletter
                </h2>
                <p className="text-[var(--gray-600)] mb-6">
                    Get the latest case studies, resources, and industry insights delivered to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-3 rounded-md border border-[var(--gray-300)] focus:outline-none focus:border-[var(--main-color-blue)] w-full sm:w-1/2"
                    />
                    <button
                        className="bg-[var(--main-color-blue)] text-[var(--white-color)] px-6 py-3 rounded-md hover:bg-[var(--main-color-blue)] transition cursor-pointer"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
