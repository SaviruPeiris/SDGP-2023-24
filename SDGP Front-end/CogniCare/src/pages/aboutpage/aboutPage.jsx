import React from "react";
import NavBarTest from "../../components/NavBar/NavBarTest";
import About from "../../components/About/About";
import Hero from "../../components/About/Hero";
import Footer from "../../../../AboutPage/src/components/Footer";

const aboutPage = () => {
  return (
    <div>
      <NavBarTest></NavBarTest>
      <Hero></Hero>
      <About></About>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default aboutPage;
