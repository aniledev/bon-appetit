import React, { useState } from "react";

export const AddReviewForm = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("Rating");

  return (
    <div className="AddReviewForm mb-2">
      <form className="add-review-form">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name" type="text">
              Name
            </label>
            <input
              className="form-control"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating" type="text">
              Rating
            </label>
            <select
              id="rating"
              className="custom-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="review" type="text">
            Review
          </label>
          <textarea
            className="form-control"
            id="review"
            placeholder="Review text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </div>
        <button className="btn btn-info add-review-button">Submit</button>
      </form>
    </div>
  );
};

export default AddReviewForm;
