import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import headerMenuItemsData from "../data/headerMenuItemsData";

const HeaderWithDropdown = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setActiveIndex(null);
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="bg-[var(--black-color)] shadow-md">
            <div ref={menuRef} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center py-4 h-[2.7rem] relative">

                {/* Left side menu for Desktop */}
                <div className="hidden md:flex space-x-4 md:space-x-6">
                    {headerMenuItemsData.map((item, index) => (
                        <div key={index} className="relative">
                            <button
                                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                                className={`font-medium transition-all duration-300 text-sm md:text-base px-2 md:px-4 py-3 cursor-pointer
                                    ${activeIndex === index
                                        ? "bg-[var(--white-color)] text-[var(--black-color)]"
                                        : "text-[var(--white-color)] hover:bg-[var(--white-color)] hover:text-[var(--black-color)]"
                                    }
                                `}
                            >
                                {item.title}
                            </button>

                            {/* Dropdown */}
                            <div className={`absolute top-full 
                                ${index <= 1 ? "left-0 origin-top-left" : "right-0 origin-top-right"}
                                ${activeIndex === index ? "opacity-100 visible scale-y-100" : "opacity-0 invisible scale-y-0"} 
                                bg-[var(--white-color)] shadow-lg border border-[var(--gray-200)] rounded-md p-4 transition-all duration-300 ease-out z-20
                                w-48 md:w-64
                            `}>
                                <ul className="space-y-2 text-md text-[var(--gray-color-navlink)]">
                                    {item.dropdown.map((link, idx) => (
                                        <li key={idx}>
                                            <Link 
                                                to={link.link} 
                                                className="hover:text-[var(--main-color-blue)] transition"
                                                onClick={() => setActiveIndex(null)}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right side social icons for Desktop */}
                <div className="hidden md:flex space-x-4">
                    <Link to="#" className="text-[var(--white-color)] hover:text-[var(--main-color-blue)] transition text-xl">
                        <FaInstagram />
                    </Link>
                    <Link to="#" className="text-[var(--white-color)] hover:text-[var(--main-color-blue)] transition text-xl">
                        <FaLinkedin />
                    </Link>
                    <Link to="#" className="text-[var(--white-color)] hover:text-[var(--main-color-blue)] transition text-xl">
                        <FaTwitter />
                    </Link>
                </div>

                {/* Hamburger Button for Mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[var(--white-color)] text-2xl focus:outline-none">
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-[var(--black-color)] flex flex-col space-y-4 p-4 z-30">
                        {headerMenuItemsData.map((item, index) => (
                            <div key={index}>
                                {/* Button to open dropdown */}
                                <button
                                    onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                                    className="text-[var(--white-color)] font-medium mb-2 w-full text-left"
                                >
                                    {item.title}
                                </button>

                                {/* Dropdown for Mobile */}
                                <ul className={`pl-4 space-y-2 transition-all duration-300 overflow-hidden
                                    ${activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                `}>
                                    {item.dropdown.map((link, idx) => (
                                        <li key={idx}>
                                            <Link 
                                                to={link.link} 
                                                className="text-[var(--gray-300)] hover:text-[var(--main-color-blue)] transition block"
                                                onClick={() => {
                                                    setIsMobileMenuOpen(false);
                                                    setActiveIndex(null);
                                                }}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Mobile social icons */}
                        <div className="flex justify-center space-x-6 pt-4 border-t border-[var(--gray-600)] mt-4">
                            <Link to="#" className="text-[var(--white-color)] hover:text-[var(--main-color-blue)] transition text-2xl">
                                <FaInstagram />
                            </Link>
                            <Link to="#" className="text-[var(--white-color)] hover:text-[var(--main-color-blue)] transition text-2xl">
                                <FaLinkedin />
                            </Link>
                            <Link to="#" className="text-[var(--white-color)] hover:text-[var(--main-color-blue)] transition text-2xl">
                                <FaTwitter />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default HeaderWithDropdown;
