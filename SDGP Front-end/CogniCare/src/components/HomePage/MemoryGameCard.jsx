// import React from "react";

// aos
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

import "./MemoryGameCard.css";
import { Link } from "react-router-dom";

const MemoryGameCard = () => {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);
  return (
    <div className="MemoryGameCardContainer">
      <div className="card text-center memoryGameCard" data-aos="zoom-in">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Test your short-term memory</h5>
          <p className="card-text" style={{ textAlign: "justify" }}>
            Our website features a simple memory game designed to challenge and
            entertain users. Players match pairs of hidden cards to test their
            memory and concentration skills. It's a great way to have fun while
            exercising the mind.
          </p>
          <Link to="/memorygame" className="btn btn-primary">
            Try the game
          </Link>
        </div>
        {/* <div className="card-footer text-body-secondary">2 days ago</div> */}
      </div>
    </div>
  );
};

export default MemoryGameCard;
