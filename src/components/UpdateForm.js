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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            className="form-control"
            type="text"
            id="location"
            placeholder="Location"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price-range">Price Range</label>
          <input
            className="form-control"
            type="number"
            id="price_range"
            placeholder="Price Range"
            required
          />
        </div>
        <button type="submit" className="btn btn-info submit-update-restaurant">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
