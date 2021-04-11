import React, { useEffect, useContext } from "react";
import RestaurantRequest from "../axios/RestaurantRequest";
import { Context } from "../context";

// useEffeect doesnt wok with class components refractor into function component first

const RestaurantList = (props) => {
  // save the response from the fetch Data function to context
  const { restaurants, setRestaurants } = useContext(Context);
  // use effect runs when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantRequest.get("/restaurant");
        // console.log(response);
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setRestaurants]);

  const handleDelete = async (id) => {
    // wrap code in a try catch block because this is going to send to DELETE /api/restaurants/:id
    try {
      const response = await RestaurantRequest.delete(`/restaurant/${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="RestaurantList list-group">
      <table className="table table-hover table-light">
        <thead>
          <tr className="bg-light">
            <th scope="col">Restaurant</th>
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
                <tr key={restaurant.id}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>Reviews</td>
                  <td>
                    <button className="btn btn-warning update-button">
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger delete-button"
                      onClick={() => handleDelete(restaurant.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}

          {/* <tr>
            <td>Mellow Mushroom</td>
            <td>Winter Park</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning update-button">Update</button>
            </td>
            <td>
              <button className="btn btn-info delete-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Mellow Mushroom</td>
            <td>Winter Park</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning update-button">Update</button>
            </td>
            <td>
              <button className="btn btn-info delete-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Mellow Mushroom</td>
            <td>Winter Park</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning update-button">Update</button>
            </td>
            <td>
              <button className="btn btn-info delete-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Mellow Mushroom</td>
            <td>Winter Park</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning update-button">Update</button>
            </td>
            <td>
              <button className="btn btn-info delete-button">Delete</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
