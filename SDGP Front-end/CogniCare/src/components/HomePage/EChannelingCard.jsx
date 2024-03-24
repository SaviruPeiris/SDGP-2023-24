// import React from "react";

import { Link } from "react-router-dom";
// aos
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import "./PredictionCard.css";
import predictionImage from "../../assets/images/HomePageImages/HomePageIMG18.jpg";

const EChannelingCard = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="chatbotCard-container mb-0 rounded"
      //   data-aos="zoom-in"
      //   data-aos-duration="1000"
    >
      <div
        className="chatbotCard-left-half"
        data-aos="fade-right"
        data-aos-duration="1000"
        // data-aos-offset="200"
      >
        <img className="chatbotImage" src={predictionImage} alt="cChannelingImage"/>
      </div>
      <div className="chatbotCard-right-half mt-0" data-aos="zoom-in">
        <h3 className="mb-4 xl:text-3xl text-3xl">Channel a doctor</h3>
        <p
          className="text-lg text-left xl:text-lg text-lg"
          data-testid="eChannelingCard-content"
        >
          E-Channelling presents a modern solution to healthcare accessibility
          and convenience. Patients can easily schedule appointments online,
          eliminating geographical barriers and reducing waiting times. With
          real-time updates and reminders, patients stay informed and engaged in
          their care journey. Additionally, e-channelling streamlines
          administrative processes, allowing healthcare providers to focus more
          on patient care. Overall, e-channelling empowers patients, enhances
          efficiency, and improves the healthcare experience for all
          stakeholders.
        </p>
        <Link to="/eChannelingPage" data-testid="go-to-eChannelingPage-btn">
          <div className="btn btn-primary">Channel</div>
        </Link>
      </div>
    </div>
  );
};

export default EChannelingCard;
