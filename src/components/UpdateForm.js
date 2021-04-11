import React from "react";
import { useParams } from "react-router-dom";

const UpdateForm = () => {
  // use params in order to route the page to the update form for a specific restaurant
  const { id } = useParams();
  console.log(id);
  return (
    <div className="UpdateForm mt-4">
      <form className="update-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            className="form-control"
            type="text"
            id="location"
            placeholder="Location"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price-range">Price Range</label>
          <input
            className="form-control"
            type="text"
            id="price_range"
            placeholder="Price Range"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
