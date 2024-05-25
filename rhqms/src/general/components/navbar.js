import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768; // Adjust breakpoint as needed
      setIsMobile(isMobileView);
    };

    handleResize(); // Initialize isMobile on component mount
    window.addEventListener('resize', handleResize);

    // Cleanup function to avoid memory leaks
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          {/* Add your logo or text here */}
          Logo
        </Link>
        <button className="text-white block lg:hidden" onClick={toggleDrawer}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={drawerOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${drawerOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="lg:flex lg:space-x-4 text-white mt-4 lg:mt-0">
            <li className="nav-item">
              <Link to="/" className="nav-link block py-2 px-4 lg:inline-block" onClick={() => setDrawerOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link block py-2 px-4 lg:inline-block" onClick={() => setDrawerOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/feedback" className="nav-link block py-2 px-4 lg:inline-block" onClick={() => setDrawerOpen(false)}>Feedback</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link block py-2 px-4 lg:inline-block" onClick={() => setDrawerOpen(false)}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
