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
    // <div className="MemoryGameCardContainer">
    //   <div
    //     className="card text-center memoryGameCard"
    //     data-aos="zoom-in"
    //     data-aos-delay="100"
    //   >
    //     {/* <div className="card-header">Featured</div> */}
    //     <div className="card-body">
    //       <h5 className="card-title text-4xl">Test your short-term memory</h5>
    //       <p className="card-text text-2xl px-10 pt-4">
    //         Our website features a simple memory game designed to challenge and
    //         entertain users. Players match pairs of hidden cards to test their
    //         memory and concentration skills. It's a great way to have fun while
    //         exercising the mind.
    //       </p>
    //       <Link to="/memorygame" className="btn btn-primary">
    //         Try the game
    //       </Link>
    //     </div>
    //     {/* <div className="card-footer text-body-secondary">2 days ago</div> */}
    //   </div>
    // </div>

    // <div
    //   className="memoryGameCard-container mb-0 shadow rounded"
    //   //   data-aos="zoom-in"
    //   //   data-aos-duration="1000"
    // >
    //   <div
    //     className="memoryGameCard-left-half"
    //     data-aos="fade-right"
    //     data-aos-duration="1000"
    //     data-aos-offset="400"
    //   >
    //     <img className="memoryGameImage" src={MemoryGameImage} />
    //   </div>
    //   <div
    //     className="memoryGameCard-right-half mt-0"
    //     data-aos="zoom-in"
    //     data-aos-duration="1000"
    //     data-aos-offset="400"
    //   >
    //     <h3 className="mb-4">Test your short-term memory</h3>
    //     <p className="text-lg text-left">
    //       Our website features a simple memory game designed to challenge and
    //       entertain users. Players match pairs of hidden cards to test their
    //       memory and concentration skills. It's a great way to have fun while
    //       exercising the mind.
    //     </p>
    //     <Link to="/memorygame" className="btn btn-primary">
    //       Try the game
    //     </Link>
    //   </div>
    // </div>

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
        <h3 className="mb-4">Test your short-term memory</h3>
        <p className="text-lg text-justify">
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
