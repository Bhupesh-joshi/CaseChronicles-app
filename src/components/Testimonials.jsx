import React from "react";
import testimonialsData from "../data/testimonialsData";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-[var(--main-bg)] py-20 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display tracking-tight text-4xl font-bold text-[var(--gray-900)] sm:text-4xl">
            What Our Customers Are Saying
          </h2>
        </div>

        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonialsData.map(({ id, image, text, author, role }) => (
            <li key={id}>
              <figure className="relative rounded-2xl bg-[var(--white-color] p-6 shadow-slate-900/10 
              shadow-xl border border-[var(--gray-200)] hover:border-[var(--main-color-blue)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2
              ">
                <blockquote className="relative">
                  <p className="text-lg text-[var(--gray-500)]">{text}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={image}
                    alt={author}
                  />
                  <div className="text-sm">
                    <div className="font-semibold text-[var(--gray-800)]">{author}</div>
                    <div className="text-[var(--gray-500)]">{role}</div>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Testimonials;
