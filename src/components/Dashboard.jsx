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
        <h1 className="text-2xl font-bold mb-4">
          <strong>Analytics</strong> Dashboard
        </h1>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex">
            <Card title="Sales" value="2.382" percentage="-3.65" isIncrease={false} />
          </div>
          <div className="flex">
            <Card title="Visitors" value="14.212" percentage="5.25" isIncrease={true} />
          </div>
          <div className="flex">
            <Card title="Earnings" value="$21.300" percentage="6.65" isIncrease={true} />
          </div>
          <div className="flex">
            <Card title="Orders" value="64" percentage="-2.25" isIncrease={false} />
          </div>
          <div className="flex">
            <Card title="Orders" value="64" percentage="-2.25" isIncrease={false} />
          </div>
          <div className="flex">
            <Card title="Orders" value="64" percentage="-2.25" isIncrease={false} />
          </div>
          <div className="flex">
            <Card title="Orders" value="64" percentage="-2.25" isIncrease={false} />
          </div>
          <div className="flex">
            <Card title="Orders" value="64" percentage="-2.25" isIncrease={false} />
          </div>
        </div>

        {/* Browser Usage, Real-Time, and Calendar */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex">
            <div className="bg-white rounded-lg shadow-md flex-1">
              <div className="p-4 border-b">
                <h5 className="text-lg font-semibold">Real-Time</h5>
              </div>
              <div className="p-4">
                <WorldMap />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="bg-white rounded-lg shadow-md flex-1">
              <div className="p-4 border-b">
                <h5 className="text-lg font-semibold">Calendar</h5>
              </div>
              <div className="p-4">
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      
        {/* Latest Projects */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="lg:col-span-2 flex">
            <div className="bg-white rounded-lg shadow-md flex-1">
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

      </div>
    </div>
  );
};

export default Dashboard;
