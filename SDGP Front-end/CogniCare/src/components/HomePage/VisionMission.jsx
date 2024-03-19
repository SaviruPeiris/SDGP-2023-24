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
      <div className="left-half text-justify border shadow bg-body rounded px-5 ml-10 py-4">
        <h2 className="text-5xl	text-violet-800">OUR VISION</h2>
        <p className="text-2xl">
          "Empowering those affected by dementia with understanding, support,
          and hope through an enriching online platform."
        </p>
      </div>
      <div className="right-half text-justify border shadow bg-body rounded px-5 mr-10 py-4">
        <h2 className="text-5xl	text-violet-800">OUR MISSION</h2>
        <p className="text-2xl">
          "To empower individuals living with dementia and their caregivers
          through comprehensive resources and support, fostering dignity and
          independence."
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
