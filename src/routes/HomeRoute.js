import React, { Component } from "react";
import HomeHeader from "../components/HomeHeader";
import AddRestaurantForm from "../components/AddRestaurantForm";
import RestaurantList from "../components/RestaurantList";

export default class HomeRoute extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <AddRestaurantForm />
        <RestaurantList />
      </div>
    );
  }
}
