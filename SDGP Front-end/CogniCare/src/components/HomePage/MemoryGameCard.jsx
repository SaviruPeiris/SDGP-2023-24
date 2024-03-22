// import React from "react";

// aos
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

import MemoryGameImage from "../../assets/images/HomePageImages/HomePageIMG17.jpg";

import "./MemoryGameCard.css";
import { Link } from "react-router-dom";

const MemoryGameCard = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="predictionCard-container mb-0 border rounded"
      // data-aos="zoom-in"
      // data-aos-offset="200"
      // data-aos-duration="1000"
    >
      <div
        className="predictionCard-left-half mt-0"
        data-aos="fade-right"
        // data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-offset="400"
      >
        <h3 className="mb-4 xl:text-3xl text-3xl">
          Test your short-term memory
        </h3>
        <p className="xl:text-lg text-lg">
          Our website features a simple memory game designed to challenge and
          entertain users. Players match pairs of hidden cards to test their
          memory and concentration skills. It's a great way to have fun while
          exercising the mind.
        </p>
        <Link to="/memorygame" className="btn btn-primary">
          Try it
        </Link>
      </div>
      <div
        className="predictionCard-right-half"
        data-aos="zoom-in"
        data-aos-offset="400"
        data-aos-duration="1000"
      >
        <img className="predictionImage" src={MemoryGameImage} />
      </div>
    </div>
  );
};

export default MemoryGameCard;
