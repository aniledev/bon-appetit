import React from "react";

const Rating = () => {
  // create an array to hold the number of stars
  // loop through the rating passed in from props
  // if i <= rating then add a start to the star array
  // render the star array
  const starRating = [];
  for (let i = 1; i <= 5; i++) {
    starRating.push(<i class="fas fa-star"></i>);
  }
  return <div className="Rating"></div>;
};

export default Rating;
