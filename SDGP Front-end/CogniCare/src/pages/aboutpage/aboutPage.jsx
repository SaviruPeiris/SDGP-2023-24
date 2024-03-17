import React from "react";
import NavBarTest from "../../components/NavBar/NavBarTest";
import About from "../../components/About/About";
import Hero from "../../components/About/Hero";
// import Support from "../../../../AboutPage/src/components/Support";
// import Services from "../../../../AboutPage/src/components/Services";
// import Support from "../../components/About/Support";
// import Services from "../../components/About/Services";
import Footer from "../../components/Footer";

const aboutPage = () => {
  return (
    <div>
      <NavBarTest></NavBarTest>
      <Hero></Hero>
      <About></About>
      {/* <Support></Support>
      <Services></Services> */}
      <Footer></Footer>
    </div>
  );
};

export default aboutPage;
