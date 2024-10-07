import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "This year",
        backgroundColor: "rgba(55, 125, 255, 0.8)",
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
