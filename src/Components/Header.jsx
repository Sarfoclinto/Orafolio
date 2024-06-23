import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex w-full justify-center gap-20 font-bold items-center fixed z-50 bg-navy-blue text-white rounded-t-2xl">
      <ul className="flex gap-10 ">
        <li className="hover:underline p-1">
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className="hover:underline p-1">
          <NavLink to="/about">ABOUT</NavLink>
        </li>
      </ul>
      <img src="src/assets/start-logo.png" alt="" />
      <ul className="flex gap-10 ">
        <li className="hover:underline p-1">
          <NavLink to="/works">WORKS</NavLink>
        </li>
        <li className="hover:underline p-1">
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
