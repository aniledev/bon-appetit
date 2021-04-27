import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import RestaurantRequest from "../axios/RestaurantRequest";
import { Context } from "../context";

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(Context);

  let history = useHistory();

  // use effect runs when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantRequest.get("/restaurant");
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, [setRestaurants]);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await RestaurantRequest.delete(`/restaurant/${id}`);
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (error) {
      throw error;
    }
  };

  const handleUpdate = async (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const handleSelectRestaurant = (id) => {
    history.push(`/restaurants/${id}`);
  };

  return (
    <div className="RestaurantList list-group container">
      <table className="container table table-hover table-light">
        <thead>
          <tr className="bg-light">
            <th className="restaurant-row" scope="col">
              Restaurant
            </th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr
                  key={restaurant.id}
                  onClick={() => handleSelectRestaurant(restaurant.id)}
                >
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>{restaurant.average_rating}</td>
                  <td>
                    <button
                      className="btn btn-warning update-button"
                      onClick={(e) => handleUpdate(e, restaurant.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger delete-button"
                      onClick={(e) => handleDelete(e, restaurant.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
