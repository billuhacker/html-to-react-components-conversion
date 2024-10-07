import React from "react";
import Card from "./Card";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import Calendar from "./Calendar";
import WorldMap from "./WorldMap";
import ProjectTable from "./ProjectTable";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        <strong>Analytics</strong> Dashboard
      </h1>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>

      {/* Recent Movement Chart */}
      <div className="mt-4 flex flex-col md:flex-row">
        <div className="flex-1 md:mr-2">
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 border-b">
              <h5 className="text-lg font-semibold">Recent Movement</h5>
            </div>
            <div className="p-4">
              <LineChart />
            </div>
          </div>
        </div>
      </div>

      {/* Browser Usage, Real-Time, and Calendar */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex">
          <div className="bg-white rounded-lg shadow-md flex-1">
            <div className="p-4 border-b">
              <h5 className="text-lg font-semibold">Browser Usage</h5>
            </div>
            <div className="p-4">
              <PieChart />
            </div>
          </div>
        </div>
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

      {/* Latest Projects and Monthly Sales */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
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
        <div className="flex">
          <div className="bg-white rounded-lg shadow-md flex-1">
            <div className="p-4 border-b">
              <h5 className="text-lg font-semibold">Monthly Sales</h5>
            </div>
            <div className="p-4">
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
