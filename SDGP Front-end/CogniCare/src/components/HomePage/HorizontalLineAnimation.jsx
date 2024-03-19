import React, { useState, useEffect } from "react";
import "./HorizontalLineAnimation.css"; // Import CSS file

const HorizontalLineAnimation = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const newProgress = scrollY / (documentHeight - windowHeight);
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <div className="line" style={{ transform: `scaleX(${progress})` }}></div>
    </div>
  );
};

export default HorizontalLineAnimation;
