import React, { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../context";
import RestaurantRequest from "../axios/RestaurantRequest";

const UpdateForm = () => {
  // use params in order to route the page to the update form for a specific restaurant
  const { id } = useParams();

  let history = useHistory();

  useContext(Context);

  // create controlled form component using state
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantRequest.get(`/restaurant/${id}`);
        setName(response.data.data.restaurant.name);
        setLocation(response.data.data.restaurant.location);
        setPriceRange(response.data.data.restaurant.price_range);
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await RestaurantRequest.put(`/restaurant/${id}`, {
        name,
        location,
        price_range: priceRange,
      });
      history.push("/restaurants");
    } catch (error) {
      throw error;
    }
  };

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
        <button
          type="submit"
          className="btn btn-info submit-update-restaurant"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
