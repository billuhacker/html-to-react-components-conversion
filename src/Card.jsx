import React from "react";

const Card = ({ title, value, percentage, isIncrease }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col mt-0">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
        <h1 className="mt-1 mb-3">{value}</h1>
        <div className="mb-0">
          <span className={isIncrease ? "text-success" : "text-danger"}>
            <i className={isIncrease ? "mdi mdi-arrow-top-right" : "mdi mdi-arrow-bottom-right"}></i>
            {percentage}%
          </span>
          <span className="text-muted"> Since last week</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
