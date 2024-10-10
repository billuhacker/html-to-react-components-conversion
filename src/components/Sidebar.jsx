import React from "react";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={` fixed inset-y-0 left-0 z-20 w-64 bg-gray-800 text-white 
      } md:relative md:translate-x-0 md:w-64 scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray hover:scrollbar-thumb-gray-dark`}
    >
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

        {/* Additional Links */}
        <li className="mb-3">
          <a href="pages-signin.html" className="flex items-center pl-6 py-2 hover:bg-gray-700">
            <i className="feather feather-log-in mr-3"></i>
            <span className="align-middle">Sign In</span>
          </a>
        </li>
        <li className="mb-3">
          <a href="pages-signup.html" className="flex items-center pl-6 py-2 hover:bg-gray-700">
            <i className="feather feather-user-plus mr-3"></i>
            <span className="align-middle">Sign Up</span>
          </a>
        </li>
        <li className="mb-3">
          <a href="pages-blank.html" className="flex items-center pl-6 py-2 hover:bg-gray-700">
            <i className="feather feather-file mr-3"></i>
            <span className="align-middle">Blank</span>
          </a>
        </li>

        {/* Tools & Components */}
        <li className="text-gray-400 uppercase tracking-wide text-xs font-bold mb-4 pl-6">
          Tools & Components
        </li>
        <li className="mb-3">
          <a href="pages-buttons.html" className="flex items-center pl-6 py-2 hover:bg-gray-700">
            <i className="feather feather-square mr-3"></i>
            <span className="align-middle">Buttons</span>
          </a>
        </li>
        <li className="mb-3">
          <a href="pages-forms.html" className="flex items-center pl-6 py-2 hover:bg-gray-700">
            <i className="feather feather-check-square mr-3"></i>
            <span className="align-middle">Forms</span>
          </a>
        </li>
        <li className="mb-3">
          <a href="pages-cards.html" className="flex items-center pl-6 py-2 hover:bg-gray-700">
            <i className="feather feather-layout mr-3"></i>
            <span className="align-middle">Cards</span>
          </a>
        </li>
        <li className="mb-3">
          <a href="pages-typography.html" className="flex items-center pl-6 py-2 hover:bg-gray-700">
            <i className="feather feather-type mr-3"></i>
            <span className="align-middle">Typography</span>
          </a>
        </li>
        <li className="mb-3">
          <a href="pages-icons.html" className="flex items-center pl-6 py-2 hover:bg-gray-700">
            <i className="feather feather-coffee mr-3"></i>
            <span className="align-middle">Icons</span>
          </a>
        </li>

        {/* Plugins & Addons */}
        <li className="text-gray-400 uppercase tracking-wide text-xs font-bold mb-4 pl-6">
          Plugins & Addons
        </li>
        <li className="mb-3">
          <a href="pages-charts.html" className="flex items-center pl-6 py-2 hover:bg-gray-700">
            <i className="feather feather-pie-chart mr-3"></i>
            <span className="align-middle">Charts</span>
          </a>
        </li>
        <li className="mb-3">
          <a href="pages-maps.html" className="flex items-center pl-6 py-2 hover:bg-gray-700">
            <i className="feather feather-map mr-3"></i>
            <span className="align-middle">Maps</span>
          </a>
        </li>
      </ul>

      {/* Upgrade to Pro Section */}
      <div className="mt-10 mb-4 px-6">
        <a href="#" className="block bg-indigo-500 text-center text-white py-2 rounded-lg font-bold hover:bg-indigo-600 transition">
          Upgrade to Pro
        </a>
      </div>
    </div>
    
  );
};

export default Sidebar;
