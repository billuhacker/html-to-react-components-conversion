import React from 'react';

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 text-white h-screen w-64">
      <div className="p-6">
        <a href="index.html" className="text-white text-lg font-semibold">
          AdminKit
        </a>
      </div>

      <ul className="mt-6">
        {/* Sidebar Header */}
        <li className="text-gray-400 uppercase tracking-wide text-xs font-bold mb-4 pl-6">
          Pages
        </li>

        {/* Dashboard Link */}
        <li className="mb-3">
          <a href="index.html" className="flex items-center pl-6 py-2 hover:bg-gray-700">
            <i className="feather feather-sliders mr-3"></i>
            <span className="align-middle">Dashboard</span>
          </a>
        </li>

        {/* Profile Link */}
        <li className="mb-3">
          <a href="pages-profile.html" className="flex items-center pl-6 py-2 bg-gray-700 rounded-lg">
            <i className="feather feather-user mr-3"></i>
            <span className="align-middle">Profile</span>
          </a>
        </li>

        {/* Add other sidebar links similarly */}
      </ul>
    </nav>
  );
};

export default Sidebar;
