import React from "react";
import "./VisionContainer.css";
import VisionImage from "../../assets/images/VisionIMG.png";

import AOS from "aos";
// import "aos/dist/aos.css";
import { useState } from "react";
import { useEffect } from "react";



const VisionContainer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="visionContainer"
        data-aos="zoom-in"
        style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
      >
        <div className="visionCard card mb-3" style={{ maxWidth: "640px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={VisionImage}
                className="img-fluid rounded-start visionImage"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Our Vision</h5>
                <p className="card-text">
                  Our vision for the dementia website is to create a
                  comprehensive online platform that empowers individuals and
                  families affected by dementia through education, early
                  detection, support, and access to innovative care solutions.
                </p>
                {/* <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionContainer;
