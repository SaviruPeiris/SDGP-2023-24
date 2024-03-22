// import React from 'react';
// import Dementia from '../assets/aboutImages/pic4.jpg';
import Dementia from "../../assets/images/aboutImages/pic6.jpg";

// aos
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
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
        <img className="chatbotImage" src={Dementia} />
      </div>
      <div className="chatbotCard-right-half mt-0" data-aos="zoom-in">
        <div className="text-white">
          <h1 className="md:text-5xl sm:text-2xl text-xl font-bold py-2 mb-2">
            OUR VISION
          </h1>
          <p className="text-xl mb-4 text-purple-800">
            Welcome to our Dementia Awareness Platform!
          </p>
          <p className="text-purple-700 text-3xl font-semibold mb-4">
            Our vision is to utilize cutting-edge technology and compassionate
            care to predict and support those affected by dementia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
