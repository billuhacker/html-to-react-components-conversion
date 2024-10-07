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
    <div className="container-fluid p-0">
      <h1 className="h3 mb-3">
        <strong>Analytics</strong> Dashboard
      </h1>

      <div className="row">
        <div className="col-xl-6 col-xxl-5 d-flex">
          <div className="w-100">
            <div className="row">
              <div className="col-sm-6">
                <Card title="Sales" value="2.382" percentage="-3.65" isIncrease={false} />
                <Card title="Visitors" value="14.212" percentage="5.25" isIncrease={true} />
              </div>
              <div className="col-sm-6">
                <Card title="Earnings" value="$21.300" percentage="6.65" isIncrease={true} />
                <Card title="Orders" value="64" percentage="-2.25" isIncrease={false} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-xxl-7">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Recent Movement</h5>
            </div>
            <div className="card-body py-3">
              <LineChart />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 col-xxl-3 d-flex">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Browser Usage</h5>
            </div>
            <div className="card-body d-flex">
              <PieChart />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-xxl-6 d-flex">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Real-Time</h5>
            </div>
            <div className="card-body px-4">
              <WorldMap />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xxl-3 d-flex">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Calendar</h5>
            </div>
            <Calendar />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-8 col-xxl-9 d-flex">
          <div className="card flex-fill">
            <div className="card-header">
              <h5 className="card-title mb-0">Latest Projects</h5>
            </div>
            <ProjectTable />
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xxl-3 d-flex">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">Monthly Sales</h5>
            </div>
            <div className="card-body d-flex w-100">
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
