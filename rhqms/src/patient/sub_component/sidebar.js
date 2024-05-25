// ./components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/appointments" className="block py-2 px-3 rounded hover:bg-gray-700">
            Take Appointment
          </Link>
        </li>
        <li>
          <Link to="/appointment-history" className="block py-2 px-3 rounded hover:bg-gray-700">
            Appointment History
          </Link>
        </li>
        <li>
          <Link to="/profile" className="block py-2 px-3 rounded hover:bg-gray-700">
            Profile Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
