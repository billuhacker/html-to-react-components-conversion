import React from "react";

const Card = ({ title, value, percentage, isIncrease, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
      <h5 className="text-lg font-semibold mb-2">{title}</h5>
      <h1 className="text-3xl font-bold mb-1">{value}</h1>
      <div className="flex items-center">
        <span className={`flex items-center ${isIncrease ? "text-green-500" : "text-red-500"}`}>
          <i className={`mdi ${isIncrease ? "mdi-arrow-top-right" : "mdi-arrow-bottom-right"} mr-1`}></i>
          {percentage}%
        </span>
        <span className="text-gray-500 ml-2">Since last week</span>
      </div>
    </div>
  );
};

export default Card;
