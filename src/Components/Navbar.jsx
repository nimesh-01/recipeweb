import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex flex-col text-3xl md:flex-row justify-center md:justify-evenly items-center text-sm gap-7 md:gap-0 p-4">
            {/* Logo */}
            <div>
                <NavLink to="/">
                    <img
                        className="w-[150px] md:w-[100px]  rounded-[30px] shadow-lg shadow-red-400/50"
                        src="https://tse2.mm.bing.net/th?id=OIP.qsU2VXveVaRedIiyD7s0pQHaD4&pid=Api&P=0&h=220"
                        alt="Logo"
                    />
                </NavLink>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center items-center md:items-center gap-4 md:gap-x-10 text-xl">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'text-red-300 text-lg font-semibold' : 'font-semibold'
                    }
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'text-red-300 text-base font-semibold' : 'font-semibold'
                    }
                    to="/recipes"
                >
                    Recipes
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `rounded-[10px] bg-red-300 text-gray-800 font-semibold ${isActive ? 'pl-3 pr-3 p-2' : 'p-2'
                        }`
                    }
                    to="/create"
                >
                    Create Recipe
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'text-red-300 text-base font-semibold' : 'font-semibold'
                    }
                    to="/fav"
                >
                    Favourite
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
