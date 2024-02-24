// import React from "react";
import "./CardContainer.css";
import Card from "./Card";
import Card1Img from "../assets/images/Card1Img.jpg";
import Card2Img from "../assets/images/Card2Img.jpg";
import Card3Img from "../assets/images/Card3Img.jpg";

// aos
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function CardContainer() {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);
  return (
    <div className="container-fluid CardContainer">
      <div className="row">
        <div className="col" data-aos="zoom-in">
          <Card
            image={Card3Img}
            title="What is dementia?"
            text="Dementia is a term used to describe a group of symptoms affecting memory, thinking, and social abilities severely enough to interfere with daily functioning. 
            "
          />
        </div>
        <div className="col" data-aos="zoom-in">
          <Card
            image={Card1Img}
            title="Tips for prevent dementia"
            text="Preventing dementia involves maintaining a healthy lifestyle
             and engaging in activities that support brain health."
          />
        </div>
        <div className="col" data-aos="zoom-in">
          <Card
            image={Card2Img}
            title="Main causes for dementia"
            text="Dementia is a complex condition with various causes,
             and often it's a combination of factors that contribute to
              its development."
          />
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
