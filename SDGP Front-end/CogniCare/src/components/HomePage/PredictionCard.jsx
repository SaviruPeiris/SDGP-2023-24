// import React from "react";

import { Link } from "react-router-dom";
// aos
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import "./PredictionCard.css";
import predictionImage from "../../assets/images/HomePageImages/HomePageIMG11.jpg";

const PredictionCard = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    // <div className="predictionCardContainer">
    //   <div
    //     className="card text-center predictionCard"
    //     data-aos="zoom-in"
    //     data-aos-delay="100"
    //   >
    //     <div className="card-header">Featured</div>
    //     <div className="card-body">
    //       <h5 className="card-title">Predict your dementia risk level</h5>
    //       <p className="card-text" style={{ textAlign: "justify" }}>
    //         (A small description about the prediction component goes here)
    //       </p>
    //       <Link to="/imageUploadAwareness" className="btn btn-primary">
    //         Test it
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div
      className="predictionCard-container border mb-5 border shadow rounded"
      data-aos="zoom-in"
      data-aos-offset="100"
    >
      <div
        className="predictionCard-left-half mt-5 px-10"
        data-aos="fade-right"
        data-aos-offset="100"
      >
        <h2>Predict the risk level</h2>
        <p className="text-2xl text-justify">
          A visual representation of brain scans or medical imagery. Right Half
          (Description): Our dementia prediction component utilizes advanced
          machine learning algorithms to analyze MRI scans of the brain and
          assess the risk of dementia. By leveraging cutting-edge technology, we
          provide early detection and personalized risk assessments, enabling
          proactive healthcare decisions and interventions for individuals at
          risk of developing dementia.
        </p>
        <Link to="/imageUploadAwareness" className="btn btn-primary">
          Try it
        </Link>
      </div>
      <div
        className="predictionCard-right-half"
        data-aos="zoom-in"
        data-aos-offset="100"
      >
        <img className="predictionImage" src={predictionImage} />
      </div>
    </div>
  );
};

export default PredictionCard;
