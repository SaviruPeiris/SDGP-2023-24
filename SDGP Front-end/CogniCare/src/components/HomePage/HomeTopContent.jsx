// import React from "react";
import backgroundImage from "../../assets/images/HomePageImages/HomePageIMG12.jpg";
import "./HomeTopContent.css";
// aos
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

const HomeTopContent = () => {
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
    <div className="background-image" data-aos="zoom-in">
      {/* Text block in the middle */}
      <div
        className="HomeWelcomeTextBlock"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h1
          className="xl:text-7xl lg:text-6xl sm:text-7xl text-4xl"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          data-aos-duration="700"
        >
          Welcome to{" "}
          <span className="text-violet-800 CogniCare">CogniCare+</span>
        </h1>
        <p
          className="xl:text-3xl lg:text-2xl text-xl mx-10"
          data-aos-duration="700"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        >
          Empowering Lives: Bridging Technology and Healthcare for Dementia
          Awareness and Prediction.
        </p>
      </div>
    </div>
  );
};

export default HomeTopContent;
