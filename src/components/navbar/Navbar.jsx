import React, { useState, useRef, useEffect } from 'react';
import { RiSearchLine } from "react-icons/ri";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderWithDropdown from '../HeaderWithDropdown';
import SearchBar from '../SearchBar';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {

    const location = useLocation(); // 👈 Step 2
    const isDashboardPage = location.pathname.startsWith("/dashboard"); // 👈 Step 3

    // if (isDashboardPage) return null; // 👈 Step 4: Don't render on dashboard routes

    const navigate = useNavigate();
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const searchRef = useRef(null);

    const handleSearch = () => {
        console.log(searchQuery);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setMobileSearchOpen(false);
            }
        };

        if (mobileSearchOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mobileSearchOpen]);

    if (isDashboardPage) return null;

    return (
        <div>
            <HeaderWithDropdown />

            <div className='bg-[var(--white-color)] relative'>
                <div className='flex flex-col md:flex-row justify-between items-center w-full max-w-[1260px] py-4 px-4 mx-auto'>

                    {/* Logo */}
                    <div className="flex items-center gap-2 md:gap-6 justify-center md:justify-start pb-2">
                        <NavLink to={'/'}>
                            <p className='text-[var(--main-color-blue)] text-2xl md:text-4xl font-extrabold'>CaseChronicles</p>
                        </NavLink>
                    </div>

                    {/* Right Buttons */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className='hidden md:flex'>
                            <SearchBar />
                        </div>
                        {/* Mobile Search Button */}
                        <div className="md:hidden">
                            <button onClick={() => setMobileSearchOpen(true)} className="text-2xl text-[var(--main-color-blue)]">
                                <RiSearchLine />
                            </button>
                        </div>

                        {/* Desktop + Mobile Login/Signup Buttons */}
                        <div className="flex items-center gap-2 md:gap-4">
                            {!isLoggedIn ? (
                                <>
                                    <NavLink to='/login'>
                                        <button className='cursor-pointer text-sm md:text-base font-semibold text-[var(--main-color-blue)] border border-[var(--main-color-blue)] py-[4px] px-[10px] md:px-[12px] hover:bg-[var(--main-color-blue)] hover:text-[var(--white-color)] rounded-sm transition'>
                                            Log In
                                        </button>
                                    </NavLink>
                                    <NavLink to='/signUp'>
                                        <button className='cursor-pointer text-sm md:text-base font-semibold text-[var(--main-color-blue)] border border-[var(--main-color-blue)] py-[4px] px-[10px] md:px-[12px] hover:bg-[var(--main-color-blue)] hover:text-[var(--white-color)] rounded-sm transition'>
                                            Sign Up
                                        </button>
                                    </NavLink>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => {
                                            setIsLoggedIn(false);
                                            toast.success("Logged Out");
                                            navigate('/');
                                        }}
                                        className='cursor-pointer text-sm md:text-base font-semibold text-[var(--main-color-blue)] border border-[var(--main-color-blue)] py-[4px] px-[10px] md:px-[12px] hover:bg-[var(--main-color-blue)] hover:text-[var(--white-color)] rounded-sm transition'
                                    >
                                        Log Out
                                    </button>
                                    <NavLink to='/Dashboard'>
                                        <button className='cursor-pointer text-sm md:text-base font-semibold text-[var(--main-color-blue)] border border-[var(--main-color-blue)] py-[4px] px-[10px] md:px-[12px] hover:bg-[var(--main-color-blue)] hover:text-[var(--white-color)] rounded-sm transition'>
                                            Dashboard
                                        </button>
                                    </NavLink>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Search Center Overlay */}
                {mobileSearchOpen && (
                    <div className="absolute inset-0 bg-transparent flex flex-col justify-center items-center z-50 p-4 transition-all">
                        <div ref={searchRef} className="flex items-center w-full max-w-md bg-white rounded-md shadow-md p-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 border-none focus:outline-none px-4 text-black"
                            />
                            <button
                                onClick={handleSearch}
                                className="bg-[var(--main-color-blue)] text-white px-4 py-2 rounded-md"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
