import React from "react";
import NavBarTest from "../../components/NavBar/NavBarTest";
import About from "../../components/About/About";
import Hero from "../../components/About/Hero";
import Footer from "../../components/About/Footer";
import Support from "../../../../AboutPage/src/components/Support";
import Services from "../../../../AboutPage/src/components/Services";

const aboutPage = () => {
  return (
    <div>
      <NavBarTest></NavBarTest>
      <Hero></Hero>
      <About></About>
      <Support></Support>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default aboutPage;
