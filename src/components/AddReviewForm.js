import React from "react";

export const AddReviewForm = () => {
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
              required
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating" type="text">
              Rating
            </label>
            <select id="rating" className="custom-select" required>
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
          <textarea className="form-control" id="review" required></textarea>
        </div>
        <button className="btn btn-info add-review-button">Submit</button>
      </form>
    </div>
  );
};

export default AddReviewForm;
