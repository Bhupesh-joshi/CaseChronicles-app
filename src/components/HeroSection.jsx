import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = ({
    title,
    highlightText,
    titleEnd,
    description,
    primaryBtnText,
    secondaryBtnText,
    imgSrc,
}) => {
    return (
        <section className="bg-[var(--main-bg)] py-14">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
                
                {/* Text Part */}
                <div className="flex flex-col justify-center text-center lg:text-left lg:max-w-xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--gray-900)]">
                        {title}
                        <span className="text-[var(--main-color-blue)]"> {highlightText} </span>
                        {titleEnd}
                    </h1>

                    <p className="mt-6 mb-8 text-lg text-[var(--gray-600)]">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <NavLink
                            to="#"
                            className="px-8 py-3 text-base font-semibold rounded bg-[var(--main-color-blue)] text-[var(--white-color)] hover:bg-[var(--blue-900)] transition duration-300"
                        >
                            {primaryBtnText}
                        </NavLink>

                        <NavLink
                            to="#"
                            className="px-8 py-3 text-base font-semibold border rounded border-[var(--main-color-blue)] text-[var(--main-color-blue)] hover:bg-[var(--blue-900)] hover:text-[var(--white-color)] transition duration-300"
                        >
                            {secondaryBtnText}
                        </NavLink>
                    </div>
                </div>

                {/* Banner Image Part */}
                <div className="flex items-center justify-center w-full lg:w-[55%] mb-10 lg:mb-0">
                    <img
                        src={imgSrc}
                        alt="Hero Banner"
                        className="w-full max-w-lg animate-floating" 
                    />
                </div>

            </div>
        </section>
    )
}

export default HeroSection
