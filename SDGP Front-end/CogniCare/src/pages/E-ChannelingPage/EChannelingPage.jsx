import React from "react";
import NavBarTest from "../../components/NavBar/NavBarTest";
// import IntroSection from '../../../../echannelling/src/components/IntroSection'
// import SearchBar from "../../../../echannelling/src/components/SearchBar";
// import Blogs from "../../../../echannelling/src/components/Blogs";

import IntroSection from "../../components/E-ChannelingPage/IntroSection";
import SearchBar from "../../components/E-ChannelingPage/SearchBar";
import Footer from "../../components/Footer";

const EChannelingPage = () => {
  return (
    <>
      <NavBarTest></NavBarTest>
      <IntroSection></IntroSection>
      <SearchBar></SearchBar>
      <Footer></Footer>
    </>
  );
};

export default EChannelingPage;