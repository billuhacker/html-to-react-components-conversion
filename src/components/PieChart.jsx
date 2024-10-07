import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    labels: ["Chrome", "Firefox", "IE"],
    datasets: [
      {
        data: [4306, 3801, 1689],
        backgroundColor: ["rgba(55, 125, 255, 1)", "rgba(255, 193, 7, 1)", "rgba(220, 53, 69, 1)"]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
