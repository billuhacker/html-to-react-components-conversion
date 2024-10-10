import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ProjectTable from "./ProjectTable"; // Assuming you have this component
import Dashboard from "./Dashboard";
import BarChart from "./BarChart";

const Main = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Default sidebar to open

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 fixed overflow-y-auto h-full bg-gray-800 text-white ">
        <Sidebar />
      </div>

      <div className="flex-1 ml-64">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Dashboard Container */}
        <div className="container mx-auto p-4 pt-16"> {/* Adjust pt-16 for Navbar height */}
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Main;


//mfa align --clean --overwrite C:/Users/Ajeeb/OneDrive/Desktop/Tajweed_FYP/FYP_TajweedFeedbackApp/dataset/Tajweed/14_sawad C:/Users/Ajeeb/OneDrive/Desktop/Tajweed_FYP/FYP_TajweedFeedbackApp/arabicdict.txt C:/Users/Ajeeb/OneDrive/Desktop/Tajweed_FYP/FYP_TajweedFeedbackApp/AR.zip C:/Users/Ajeeb/OneDrive/Desktop/Test
