import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "2024 Sales Growth",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        data: [70, 85, 58, 90, 112, 95, 102, 123, 111, 125, 99, 138]
      }
    ]
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Monthly Sales Growth (2024)</h2>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
