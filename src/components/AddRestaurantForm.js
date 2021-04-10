import React, { Component } from "react";

export default class AddRestaurantForm extends Component {
  render() {
    return (
      <div className="AddRestaurantForm mb-4">
        <form className="add-restaurant-form">
          <div className="form-row">
            <div className="col">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="name"
                id="name"
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
                placeholder="location"
              />
            </div>
            <div className="col">
              <label htmlFor="price-range" className="sr-only">
                Price Range
              </label>
              <select id="price-range" className="custom-select my-1 mr-sm-2">
                <option disabled>Price Range</option>
                <option value="1">$</option>
                <option value="3">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
              </select>
            </div>
            <button className="btn btn-primary add-restaurant-button">
              Add Restaurant
            </button>
          </div>
        </form>
      </div>
    );
  }
}
