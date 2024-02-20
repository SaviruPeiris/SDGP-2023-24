// import React from "react";
import "./CardContainer.css";
import Card from "./Card";

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
        <div className="col" data-aos="fade-right">
          <Card></Card>
        </div>
        <div className="col" data-aos="fade-up">
          <Card></Card>
        </div>
        <div className="col" data-aos="fade-left">
          <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
