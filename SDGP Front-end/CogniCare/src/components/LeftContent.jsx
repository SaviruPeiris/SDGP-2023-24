import React from "react";
import "./Content.css";
import HomeImage from "../assets/images/HomePageIMG.jpg";

const LeftContent = () => {
  return (
    <div className="content">
      <div className="leftContent">
        <p className="textBlock">
          Empowering Lives: Bridging Technology and Healthcare for Dementia
          Awareness and Prediction.
        </p>
      </div>
      <div className="rightContent">
        <div className="image">
          <img src={HomeImage} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
