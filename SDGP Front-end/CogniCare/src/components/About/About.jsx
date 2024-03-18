// import React from 'react';

// aos
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div name="about" className="w-full my-20">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-purple-900" data-aos="zoom-in">
            ABOUT
          </h2>
          <p className="text-3xl py-6 text-gray-500" data-aos="zoom-in">
            We aim to create a world where individuals and families facing
            dementia can find solace, support, and empowerment.
          </p>
          <p className="text-3xl py-6 text-gray-500" data-aos="zoom-in">
            We are dedicated to providing valuable resources and tools to help
            individuals understand and manage their risk of dementia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
