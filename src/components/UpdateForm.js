import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import RestaurantRequest from "../axios/RestaurantRequest";

const UpdateForm = () => {
  // use params in order to route the page to the update form for a specific restaurant
  const { id } = useParams();
  console.log(id);
  // use context to set the placeholder value of the individual restaurant we are updatin
  const { restaurants } = useContext(Context);
  // create controlled form component using state
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // fetch data again on the update form so that we can use the values to change placeholder text

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantRequest.get(`/restaurant/${id}`);
        console.log(response.data.data);
        // setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price-range">Price Range</label>
          <input
            className="form-control"
            type="number"
            id="price_range"
            min="1"
            max="5"
            placeholder="Price Range"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
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
