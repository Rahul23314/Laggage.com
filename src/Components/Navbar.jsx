import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700" style={{ height: "90px" }}>
      <div className="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="Navbar" alt="Luggage.com Logo" /> 
          
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Luggage.com</span>
        </Link>

        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link to="/" className="md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent">Home</Link>
          </li>

          <li>
            <button className="md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent">
              Dropdown
            </button>
          </li>

          <li>
            <Link to="/aboutus" className="md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent">About Us</Link>
          </li>

          <li>
            <Link to="/pricing" className="md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent">Pricing</Link>
          </li>

          <li>
            <Link to="/contact" className="md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
