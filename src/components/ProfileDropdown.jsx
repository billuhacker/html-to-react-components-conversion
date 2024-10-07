import React from 'react';

const ProfileDropdown = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-48 mt-2 text-gray-700">
      <a href="pages-profile.html" className="block px-4 py-2 text-sm hover:bg-gray-100">
        <i className="feather feather-user mr-2"></i> Profile
      </a>
      <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
        <i className="feather feather-pie-chart mr-2"></i> Analytics
      </a>
      <div className="border-t border-gray-200 my-2"></div>
      <a href="index.html" className="block px-4 py-2 text-sm hover:bg-gray-100">
        <i className="feather feather-settings mr-2"></i> Settings & Privacy
      </a>
      <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
        <i className="feather feather-help-circle mr-2"></i> Help Center
      </a>
      <div className="border-t border-gray-200 my-2"></div>
      <a href="#" className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
        Log out
      </a>
    </div>
  );
};

export default ProfileDropdown;
