import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales ($)",
        fill: true,
        backgroundColor: "rgba(215, 227, 244, 0.5)",
        borderColor: "rgba(55, 125, 255, 1)",
        data: [2115, 1562, 1584, 1892, 1587, 1923, 2566, 2448, 2805, 3438, 2917, 3327]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: { reverse: true },
      y: { ticks: { stepSize: 1000 } }
    }
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
