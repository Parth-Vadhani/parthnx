import React, { useState } from "react";
import { useCart } from "../contexts/CartContext"; // Correct path
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const { cart } = useCart();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://picsum.photos/50"
            alt="Parth NX Logo"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-2xl font-bold text-gray-800 dark:text-white">
            Parth NX
          </span>
        </div>

        {/* Links and Cart */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-800 dark:text-white hover:text-blue-500">Home</Link>
          <Link to="/about" className="text-gray-800 dark:text-white hover:text-blue-500">About</Link>
          <Link to="/products" className="text-gray-800 dark:text-white hover:text-blue-500">Products</Link>

          <button onClick={toggleDarkMode} className="bg-gray-800 text-white p-2 rounded-full">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-3xl text-gray-800 dark:text-white" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link to="/" className="text-gray-800 dark:text-white hover:text-blue-500">Home</Link>
          <Link to="/about" className="text-gray-800 dark:text-white hover:text-blue-500">About</Link>
          <Link to="/products" className="text-gray-800 dark:text-white hover:text-blue-500">Products</Link>
          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-2xl text-gray-800 dark:text-white" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
          <button onClick={toggleDarkMode} className="bg-gray-800 text-white p-2 rounded-full">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
