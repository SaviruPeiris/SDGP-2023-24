// import React from "react";

import { Link } from "react-router-dom";
// aos
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import "./PredictionCard.css";

const PredictionCard = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="predictionCardContainer">
      <div
        className="card text-center predictionCard"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Predict your dementia risk level</h5>
          <p className="card-text" style={{ textAlign: "justify" }}>
            (A small description about the prediction component goes here)
          </p>
          <Link to="/imageUploadAwareness" className="btn btn-primary">
            Test it
          </Link>
        </div>
        {/* <div className="card-footer text-body-secondary">2 days ago</div> */}
      </div>
    </div>
  );
};

export default PredictionCard;
