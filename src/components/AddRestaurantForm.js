import React, { useState } from "react";

const AddRestaurantForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = (e) => {
    console.log("clicked");
  };

  return (
    <div className="AddRestaurantForm mb-4">
      <form className="add-restaurant-form mt-5">
        <div className="form-row">
          <div className="col">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <label htmlFor="location" className="sr-only">
              Location
            </label>
            <input
              type="text"
              id="location"
              className="form-control"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="col">
            <label htmlFor="price-range" className="sr-only">
              Price Range
            </label>
            <select
              id="price-range"
              className="custom-select my-1 mr-sm-2"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="3">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-info add-restaurant-button"
            onClick={handleSubmit}
          >
            Add Restaurant
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurantForm;
