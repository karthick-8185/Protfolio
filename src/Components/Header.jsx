import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { FcHome, FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Apply theme class to html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">MyPortfolio</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/landingpage" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 flex items-center gap-1">
            <FcHome />
            Home
          </Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 flex items-center gap-1">
            <FcAbout />
            About
          </Link>
          <button onClick={toggleTheme} className="text-xl text-gray-700 dark:text-gray-200">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 dark:text-gray-200" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <Link to="/" className="block text-gray-700 dark:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block text-gray-700 dark:text-gray-200" onClick={() => setIsOpen(false)}>About</Link>
          <button onClick={toggleTheme} className="text-xl text-gray-700 dark:text-gray-200">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
