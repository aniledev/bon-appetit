import React, { Component } from "react";
import "../styles/UpdateRoute.css";
import UpdateForm from "../components/UpdateForm";

export default class UpdateRoute extends Component {
  render() {
    return (
      <div className="UpdateRoute ">
        <h1 className="text-center">Update Restaurant</h1>
        <UpdateForm />
      </div>
    );
  }
}
