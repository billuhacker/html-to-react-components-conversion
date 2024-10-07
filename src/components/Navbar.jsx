import React, { useState } from 'react';
import ProfileDropdown from './ProfileDropdown'; // Import the dropdown component

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md flex items-center justify-between p-4">
      <a href="#" className="text-gray-700 focus:outline-none">
        <i className="hamburger align-self-center"></i>
      </a>

      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <div className="relative">
          <a href="#" className="text-gray-700">
            <i className="feather feather-bell"></i>
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
          </a>
        </div>

        {/* Messages */}
        <div className="relative">
          <a href="#" className="text-gray-700">
            <i className="feather feather-message-square"></i>
          </a>
        </div>

        {/* User Avatar and Profile Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none">
            <img
              src="img/avatars/avatar.jpg"
              className="w-8 h-8 rounded-full"
              alt="User Name"
            />
            <span className="hidden sm:inline text-gray-700">User Name</span>
          </button>

          {/* Profile Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2">
              <ProfileDropdown />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
