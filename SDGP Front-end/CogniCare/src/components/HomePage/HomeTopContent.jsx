// import React from "react";
import backgroundImage from "../../assets/images/HomePageIMG2.jpg";
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
    // <div
    //   className="background-image"
    //   data-aos="zoom-in"
    //   style={{
    //     position: "relative", // Make the container relative for absolute positioning
    //     backgroundImage: `url(${backgroundImage})`, // Set the background image
    //     backgroundSize: "cover", // Cover the entire container
    //     backgroundPosition: "center", // Center the background image
    //     height: "100vh", // Adjust the height as needed
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     // backgroundColor: "rgba(0, 0, 0, 0.5)",
    //     // opacity: "50%",
    //   }}
    // >
    //   {/* Text block in the middle */}
    //   <div
    //     style={{
    //       position: "absolute",
    //       textAlign: "center",
    //       color: "white",
    //       padding: "20px",
    //       backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
    //       borderRadius: "8px",
    //       //   opacity: "100%",
    //     }}
    //   >
    //     <h1>Welcome to My Website</h1>
    //     <p>This is a sample text block on top of the background image.</p>
    //   </div>
    // </div>

    // <div className="HomeTopContent">
    //   <div className="background-image">
    //     <img src={backgroundImage} />
    //   </div>
    //   <div className="HomeWelcomeTextBlock">
    //     <h1>Welcome to My Website</h1>
    //     <p>This is a sample text block on top of the background image.</p>
    //   </div>
    // </div>

    <div className="background-image" data-aos="zoom-in">
      {/* Text block in the middle */}
      <div
        className="HomeWelcomeTextBlock"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h1
          className="text-7xl"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        >
          Welcome to CogniCare+
        </h1>
        <p
          className="text-3xl"
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
