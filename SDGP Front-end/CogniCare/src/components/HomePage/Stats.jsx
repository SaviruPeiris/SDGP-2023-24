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

const Stats = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="statRow py-10"
      data-aos-delay="0"
      data-aos="zoom-in-down"
      data-aos-duration="700"
    >
      <div className="stat col" data-aos="">
        <h1>
          <CountUp
            start={0}
            end={100}
            duration={10}
            enableScrollSpy={true}
          ></CountUp>{" "}
          lakhs
        </h1>
        <p>dementia cases per year</p>
      </div>
      <div className="stat col" data-aos="">
        <h1>
          <CountUp
            start={0}
            end={18}
            duration={5}
            enableScrollSpy={true}
          ></CountUp>{" "}
          lakhs
        </h1>
        <p>dementia deaths per year</p>
      </div>
    </div>
  );
};

export default Stats;
