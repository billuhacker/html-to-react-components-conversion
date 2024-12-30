import React from "react";
import Card from "./Card";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import Calendar from "./Calendar";
import WorldMap from "./WorldMap";
import ProjectTable from "./ProjectTable";
import VideoSection from "./VideoSection"; // Import VideoSection

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Main content area */}
      <div className="flex-1 p-4">
        <h1 className="text-4xl font-bold mb-4">
          <strong>DASHBOARD</strong> 
        </h1>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6"> {/* Increased gap to gap-6 */}
          <div className="flex">
            <Card className="bg-gray-300" title="Sales" value="2.382" percentage="-3.65" isIncrease={false} />
          </div>
          <div className="flex">
            <Card className="bg-gray-300" title="Visitors" value="14.212" percentage="5.25" isIncrease={true} />
          </div>
          <div className="flex">
            <Card className="bg-gray-300" title="Earnings" value="$21.300" percentage="6.65" isIncrease={true} />
          </div>
          <div className="flex">
            <Card className="bg-gray-300" title="Orders" value="64" percentage="-2.25" isIncrease={false} />
          </div>
          <div className="flex">
            <Card className="bg-gray-300" title="Orders" value="64" percentage="-2.25" isIncrease={false} />
          </div>
          <div className="flex">
            <Card className="bg-gray-300" title="Orders" value="64" percentage="-2.25" isIncrease={false} />
          </div>
          <div className="flex">
            <Card className="bg-gray-300" title="Orders" value="64" percentage="-2.25" isIncrease={false} />
          </div>
          <div className="flex">
            <Card className="bg-gray-300" title="Orders" value="64" percentage="-2.25" isIncrease={false} />
          </div>
        </div>

        {/* Latest Projects */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6"> {/* Increased gap to gap-6 */}
          <div className="lg:col-span-2 flex">
            <div className="bg-gray-200 rounded-lg shadow-md flex-1">
              <div className="p-4 border-b">
                <h5 className="text-lg font-semibold">Latest Projects</h5>
              </div>
              <div className="p-4">
                <ProjectTable />
              </div>
            </div>
          </div>
        </div>

        {/* Add Video Section */}
        <div className="mt-8">
          <VideoSection />
        </div>

        {/* Browser Usage, Real-Time, and Calendar */}
        <div className="mt-6 flex gap-6"> {/* Added flex with gap-6 */}
          {/* Calendar on left */}
          <div className="flex-1 bg-gray-200 rounded-lg shadow-md">
            <div className="p-4 border-b">
              <h5 className="text-lg font-semibold">Calendar</h5>
            </div>
            <div className="p-4">
              <Calendar />
            </div>
          </div>

          {/* Real-Time on right */}
          <div className="flex-1 bg-gray-200 rounded-lg shadow-md">
            <div className="p-4 border-b">
              <h5 className="text-lg font-semibold">Real-Time</h5>
            </div>
            <div className="p-4">
              <WorldMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
