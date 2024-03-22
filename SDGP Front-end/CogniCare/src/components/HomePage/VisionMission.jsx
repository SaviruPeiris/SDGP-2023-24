import React from "react";
import "./VisionMission.css";

import { useEffect } from "react";
import { useState } from "react";

const VisionMission = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="vision-mission-container gap-10 mt-10"
      style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
    >
      <div className="left-half text-justify border shadow bg-body rounded px-5 py-4">
        <h2 className="text-3xl xl:text-4xl	text-violet-800">Our Vision</h2>
        <p className="xl:text-2xl text-lg">
          Empowering those affected by dementia with understanding, support, and
          hope through an enriching online platform.
        </p>
      </div>
      <div className="right-half text-justify border shadow bg-body rounded px-5 py-4">
        <h2 className="text-3xl xl:text-4xl	text-violet-800">Our Mission</h2>
        <p className="xl:text-2xl text-lg">
          To empower individuals living with dementia and their caregivers
          through comprehensive resources and support, fostering dignity and
          independence.
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
