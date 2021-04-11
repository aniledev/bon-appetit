import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import RestaurantRequest from "../axios/RestaurantRequest";
// import Rating from "./Rating";
import Reviews from "./Reviews";
import AddReviewForm from "./AddReviewForm";

const RestaurantInfo = () => {
  // destructure the params object
  // destructure the context object
  // make a call to the server api/restaurant/:id using useEffect
  // wrap in a try catch bloc
  // make a get request to /api/restaurant/:id
  // save this repsonse to the state
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantRequest.get(`/restaurant/${id}`);
        console.log(response.data.data);
        setSelectedRestaurant(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, setSelectedRestaurant]);

  return (
    <div className="Restaurant">
      <h1 className="text-center">
        {selectedRestaurant.restaurant && selectedRestaurant.restaurant.name}
      </h1>

      {selectedRestaurant && (
        <>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
            <AddReviewForm />
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantInfo;
