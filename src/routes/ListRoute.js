import React, { Component } from "react";
import HomeHeader from "../components/HomeHeader";
import AddRestaurantForm from "../components/AddRestaurantForm";
import RestaurantList from "../components/RestaurantList";
import "../styles/AddRestaurantForm.css";

export default class ListRoute extends Component {
  render() {
    return (
      <div className="ListRoute">
        <HomeHeader />
        <AddRestaurantForm />
        <RestaurantList />
      </div>
    );
  }
}
