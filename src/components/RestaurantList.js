import React, { useEffect } from "react";
import RestaurantRequest from "../axios/RestaurantRequest";

// useEffeect doesnt wok with class components refractor into function component first

const RestaurantList = () => {
  // use effect runs when the component mounts
  // use async /await actions to make request to restaurant
  // due to async actions wrap your code in a try catch block for error handling

  // save the response from the request to a variable for manipulation
  // wrap text in fetchData function as adviced by console warning
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantRequest.get("/restaurant");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
