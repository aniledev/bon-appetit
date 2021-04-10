import React, { Component } from "react";
import Header from "../components/Header";
import AddRestaurantForm from "../components/AddRestaurantForm";
import RestaurantList from "../components/RestaurantList";

export default class HomeRoute extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddRestaurantForm />
        <RestaurantList />
      </div>
    );
  }
}
