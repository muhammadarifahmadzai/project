import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Close the navbar whenever the location changes (i.e., when navigating to a new route)
  useEffect(() => {
    closeNavbar();
  }, [location]);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              <span className="font-bold">Logo</span>
              <span className="ml-2 font-semibold">Shifa</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={closeNavbar}>Home</Link>
              <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={closeNavbar}>About</Link>
              <Link to="/feedback" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={closeNavbar}>Services</Link>
              <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={closeNavbar}>Contact</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="text-gray-300 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/home" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeNavbar}>Home</Link>
            <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeNavbar}>About</Link>
            <Link to="/feedback" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeNavbar}>Services</Link>
            <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeNavbar}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
