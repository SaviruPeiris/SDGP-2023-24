import "./Stats.css";

// aos
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
//importing CountUp
import CountUp from "react-countup";
//importing image
import statBgImage from "../../assets/images/HomePageImages/HomePageIMG12.jpg";
import { useState } from "react";


const Stats = () => {
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
    <div
      className="statRow py-10"
      data-aos-delay="0"
      data-aos="zoom-in-down"
      data-aos-duration="700"
      style={{ transform: `translateY(-${offsetY * 0.3 - 600}px)` }}
    >
      <div className="stat col" data-aos="">
        <h1 className="text-5xl">
          <CountUp
            start={0}
            end={100}
            duration={5}
            enableScrollSpy={true}
          ></CountUp>{" "}
          lakhs
        </h1>
        <p className="text-4xl">dementia cases per year</p>
      </div>
      <div className="stat col" data-aos="">
        <h1 className="text-5xl">
          <CountUp
            start={0}
            end={18}
            duration={5}
            enableScrollSpy={true}
          ></CountUp>{" "}
          lakhs
        </h1>
        <p className="text-4xl">dementia deaths per year</p>
      </div>
    </div>
  );
};

export default Stats;
