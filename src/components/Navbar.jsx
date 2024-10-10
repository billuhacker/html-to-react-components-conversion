import React, { useState } from "react";
//import Sidebar from "./Sidebar"; // Assuming you have a Sidebar component

const Navbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNotificationDropdown = () => {
    setNotificationDropdownOpen(!notificationDropdownOpen);
  };

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

  return (
   
      

      <nav className="bg-white shadow-md p-4 flex justify-between items-center z-30 relative">
      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none">
          {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Center - Notification Icon */}
        <div className="relative">
          <button className="text-gray-500 focus:outline-none" onClick={toggleNotificationDropdown}>
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
                d="M15 17h5l-1.405-1.405C18.537 14.614 18 13.11 18 11.5V7a6 6 0 10-12 0v4.5c0 1.61-.537 3.114-1.595 4.095L3 17h5m7 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
          </button>

          {/* Notifications Dropdown */}
          {notificationDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg py-2">
              <p className="px-4 py-2 text-gray-700 font-bold">Notifications</p>
              <div className="border-t max-h-40 overflow-y-auto scrollbar-hide">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  New comment on your post
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  New follower: John Doe
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  System update available
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Right - Profile */}
        <div className="relative">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={toggleDropdown}>
            <span className="text-gray-700 font-medium">Charles Hall</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>

          {/* Profile Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Logout
              </a>
              <div className="border-t mt-2">
                <a href="#" className="block px-4 py-2 text-indigo-500 font-bold hover:bg-indigo-100">
                  Upgrade to Pro
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
  
  );
};

export default Navbar;
