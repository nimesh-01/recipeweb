import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinkStyle = ({ isActive }) =>
  `relative px-3 py-2 font-semibold transition-colors duration-300
   after:content-[''] after:absolute after:left-0 after:bottom-0 
   after:w-full after:h-[2px] after:bg-red-300 after:scale-x-0 after:origin-left 
   after:transition-transform after:duration-300 hover:after:scale-x-100 
   ${isActive ? 'text-red-300' : 'text-white'}`;

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center text-sm gap-7 md:gap-0 p-4">
      
      {/* Logo */}
      <div>
        <NavLink to="/">
          <img
            className="w-[150px] md:w-[100px] rounded-[30px] shadow-lg shadow-red-400/50"
            src="https://tse2.mm.bing.net/th?id=OIP.qsU2VXveVaRedIiyD7s0pQHaD4&pid=Api&P=0&h=220"
            alt="Logo"
          />
        </NavLink>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center items-center md:items-center gap-4 md:gap-x-10 text-xl">
        <NavLink to="/" className={navLinkStyle}>Home</NavLink>
        <NavLink to="/recipes" className={navLinkStyle}>Recipes</NavLink>
        <NavLink to="/create" className={navLinkStyle}>Create Recipe</NavLink>
        <NavLink to="/fav" className={navLinkStyle}>Favourite</NavLink>
          <NavLink to="/about" className={navLinkStyle}>About</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
