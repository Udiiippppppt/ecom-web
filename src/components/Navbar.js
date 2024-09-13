import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../logo.png'; // Import your logo image

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white">
      <div className="container  px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center text-white">
            <img src={logo} alt="EcomApp" className="h-10 mr-3" />
            <span className="text-2xl font-bold">EcomApp</span>
          </Link>

          {/* Menu Button for Mobile */}
          <div className="block lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-white text-lg hover:text-gray-200 transition duration-300">
              Home
            </Link>
            <Link to="/AboutUS" className="text-white text-lg hover:text-gray-200 transition duration-300">
              About Us
            </Link>
            <Link to="/profile" className="text-white text-lg hover:text-gray-200 transition duration-300">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to="/cart" className="relative text-white text-lg hover:text-gray-200 transition duration-300">
              <FontAwesomeIcon icon={faShoppingCart} />
              {/* Cart Indicator */}
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
            </Link>
            <Link to="/login" className="text-white text-lg hover:text-gray-200 transition duration-300">
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="flex flex-col items-center space-y-4 mt-4">
              <Link to="/" className="text-white text-lg hover:text-gray-200 transition duration-300">
                Home
              </Link>
              <Link to="/AboutUS" className="text-white text-lg hover:text-gray-200 transition duration-300">
                About Us
              </Link>
              <Link to="/profile" className="text-white text-lg hover:text-gray-200 transition duration-300">
                <FontAwesomeIcon icon={faUser} />
              </Link>
              <Link to="/cart" className="relative text-white text-lg hover:text-gray-200 transition duration-300">
                <FontAwesomeIcon icon={faShoppingCart} />
                {/* Cart Indicator */}
                <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
              </Link>
              <Link to="/login" className="text-white text-lg hover:text-gray-200 transition duration-300">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
