import React from "react";
import { useParams } from "react-router-dom";

const UpdateForm = () => {
  // use params in order to route the page to the update form for a specific restaurant
  const { id } = useParams();
  console.log(id);
  return <div className="UpdateForm">Update Form</div>;
};

export default UpdateForm;
