import React from 'react';
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
    return (
        <div className="flex items-center rounded-full border border-[var(--gray-300)] overflow-hidden w-71">
            <input
                type="text"
                placeholder="What do you want to learn?"
                className="flex-1 px-4 py-2 placeholder:text-[var(--gray-color-navlink)] focus:outline-none"
            />
            <button className="mr-1 px-2 py-2 bg-[var(--main-color-blue)] rounded-full text-[var(--white-color)] cursor-pointer">
                <FiSearch className="text-lg" />
            </button>
        </div>
    )
}

export default SearchBar;
