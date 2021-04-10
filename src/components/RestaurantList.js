import React, { Component } from "react";

export default class RestaurantList extends Component {
  render() {
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
                <button className="btn btn-warning update-button">
                  Update
                </button>
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
                <button className="btn btn-warning update-button">
                  Update
                </button>
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
                <button className="btn btn-warning update-button">
                  Update
                </button>
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
                <button className="btn btn-warning update-button">
                  Update
                </button>
              </td>
              <td>
                <button className="btn btn-info delete-button">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
