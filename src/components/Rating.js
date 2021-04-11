import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
// import { star } from "@fortawesome/free-regular-svg-icons";

const Rating = ({ rating }) => {
  // create an array to hold the number of stars
  // loop through the rating passed in from props
  // if i <= rating then add a start to the star array
  // render the star array
  const starRating = [];

  for (let i = 1; i <= 5; i++) {
    const filledStar = <FontAwesomeIcon icon={faStar} key={i} />;
    const halfStar = <FontAwesomeIcon icon={faStarHalf} key={i} />;
    if (i <= rating) {
      starRating.push(filledStar);
    } // use Math.ceil to round up regardless of the floating point number
    else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      starRating.push(halfStar);
    }
  }
  return <div className="Rating">{starRating}</div>;
};

export default Rating;
