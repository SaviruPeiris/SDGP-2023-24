import "./Stats.css";

// aos
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const Stats = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="statRow" data-aos-delay="10" data-aos="zoom-in-up">
      <div className="stat col" data-aos="zoom-in-up">
        <h1>
          <CountUp
            start={0}
            end={100}
            duration={5}
            enableScrollSpy={true}
          ></CountUp>{" "}
          lakhs
        </h1>
        <p>cases per year</p>
      </div>
      <div className="stat col" data-aos="zoom-in-up">
        <h1>
          <CountUp
            start={0}
            end={18}
            duration={5}
            enableScrollSpy={true}
          ></CountUp>{" "}
          lakhs
        </h1>
        <p>deaths per year</p>
      </div>
    </div>
  );
};

export default Stats;
