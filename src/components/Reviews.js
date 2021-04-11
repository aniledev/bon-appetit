import React from "react";
import Rating from "./Rating";

const Reviews = () => {
  return (
    <div className="Reviews row row-cols-3 mb-2">
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Elina</span>
          <span>
            <Rating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">Some text here</p>
        </div>
      </div>
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Elina</span>
          <span>
            <Rating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">Some text here</p>
        </div>
      </div>
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Elina</span>
          <span>
            <Rating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">Some text here</p>
        </div>
      </div>
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Elina</span>
          <span>
            <Rating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">Some text here</p>
        </div>
      </div>
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Elina</span>
          <span>
            <Rating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">Some text here</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
