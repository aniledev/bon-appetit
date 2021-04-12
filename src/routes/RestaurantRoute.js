import React, { Component } from "react";
import RestaurantInfo from "../components/RestaurantInfo";
import "../styles/RestaurantRoute.css";

export default class RestaurantRoute extends Component {
  render() {
    return (
      <div className="RestaurantRoute">
        <RestaurantInfo />
      </div>
    );
  }
}
