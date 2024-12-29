import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-8">
      <div className="flex justify-between items-center">
        
        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `hover:text-blue-400 ${isActive ? 'text-blue-400 font-bold' : ''}`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/task-list"
              className={({ isActive }) =>
                `hover:text-blue-400 ${isActive ? 'text-blue-400 font-bold' : ''}`
              }
            >
              Task list
            </NavLink>
          </li>
        </ul>

        
        <button className="hover:text-blue-400">Sign Out</button>
      </div>
    </nav>
  );
};

export default Navbar;
