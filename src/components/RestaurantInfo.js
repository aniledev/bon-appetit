import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import RestaurantRequest from "../axios/RestaurantRequest";
import Reviews from "./Reviews";
import AddReviewForm from "./AddReviewForm";

const RestaurantInfo = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantRequest.get(`/restaurant/${id}`);
        setSelectedRestaurant(response.data.data);
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, [id, setSelectedRestaurant]);

  return (
    <div className="Restaurant">
      <h1 className="text-center display-3">
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
