// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../patient/contactus';
import PHome from '../../patient/p_home';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    closeSidebar();
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <PHome />;
      case 'About':
        return <Contact />;
     
      case 'Contact':
        return <Contact />;
      default:
        return <PHome />;
    }
  };

  const tabs = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Services' },
    { name: 'Contact' },
  ];

  return (
    <div className="flex">
      <div
        className={`fixed inset-0 z-30 bg-gray-600 bg-opacity-50 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeSidebar}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-md transform lg:relative lg:translate-x-0 lg:shadow-none transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 bg-blue-500 text-white">
          <h2 className="text-lg font-semibold">Sidebar</h2>
          <button
            className="lg:hidden focus:outline-none"
            onClick={closeSidebar}
          >
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <ul>
            {tabs.map((tab) => (
              <li key={tab.name}>
                <a
                  href="#"
                  className={`block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg ${
                    activeTab === tab.name ? 'bg-gray-300' : ''
                  } hover:bg-gray-400`}
                  onClick={() => handleTabClick(tab.name)}
                >
                  {tab.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex-1 lg:ml-3">
        <header className="flex items-center justify-between p-4 bg-blue-500 text-white lg:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <h1 className="text-lg font-semibold">Responsive Sidebar</h1>
        </header>

        <main className="p-4 ">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
