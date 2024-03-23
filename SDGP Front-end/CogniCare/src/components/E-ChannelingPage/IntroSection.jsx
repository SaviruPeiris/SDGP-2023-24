import React from "react";
// import bgImg from '../assets/pic3.jpg'
import bgImg from "../../assets/images/E-ChannelingPage/channel.jpg";

const IntroSection = () => {
  return (
    <div
      name="home"
      className="w-full h-900 bg-white flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl text-purple-800">
            Book appointment with your fav doctors
          </p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold text-purple-900">
            Finding Healthcare
          </h1>
          <p className="text-2xl text-purple-700">
            Find the right healthcare professional for your needs, anytime,
            anywhere.
          </p>
          
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
