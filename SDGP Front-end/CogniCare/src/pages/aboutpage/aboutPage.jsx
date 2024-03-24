import React from "react";
import About from "../../components/About/About";
import Hero from "../../components/About/Hero";
// import Support from "../../../../AboutPage/src/components/Support";
// import Services from "../../../../AboutPage/src/components/Services";
import Support from "../../components/About/Support";
import Services from "../../components/About/Services";

const aboutPage = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Support></Support>
      <Services></Services>
    </div>
  );
};

export default aboutPage;
