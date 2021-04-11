import React from "react";

const Rating = () => {
  // create an array to hold the number of stars
  // loop through the rating passed in from props
  // if i <= rating then add a start to the star array
  // render the star array
  const starRating = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starRating.push(<i className="fas fa-star"></i>);
    } else {
      starRating.push(<i className="far fa-star"></i>);
    }
  }
  return <div className="Rating">{starRating}</div>;
};

export default Rating;
