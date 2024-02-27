// import React from "react";

// aos
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

import "./MemoryGameCard.css";

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
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Try the game
          </a>
        </div>
        {/* <div className="card-footer text-body-secondary">2 days ago</div> */}
      </div>
    </div>
  );
};

export default MemoryGameCard;
