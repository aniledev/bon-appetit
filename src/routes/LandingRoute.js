import React from "react";
import "../styles/LandingRoute.css";

export const LandingRoute = () => {

  return (
    <div className="LandingRoute">
      <div className="LandingHeader">
        <h1 className="font-weight-light display-1 text-center">
          Bon Appetit!
        </h1>
      </div>
      <div className="landing-image d-flex justify-content-center mb-3 mt-3">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Photograph of plated food at fine dining establishment."
        />
      </div>
      <div>
        <h3 className="subtitle text-center">
          Bon Appetit! Guten appetit. Itadakimasu. We all have to eat, but
          eating badly is a choice. Save and document your favorite dining
          experiences for future reference. Even leave reviews if you feel so
          inclined.
        </h3>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button
          type="button"
          className="btn btn-danger welcome-button"
          onClick={handleWelcomeButton}
        >
          Welcome!
        </button>
      </div>
    </div>
  );
};

export default LandingRoute;
