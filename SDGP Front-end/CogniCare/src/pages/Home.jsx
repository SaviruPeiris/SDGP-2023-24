import React from "react";
import NavBarTest from "../components/NavBar/NavBarTest";
import LeftContent from "../components/LeftContent";
import CardContainer from "../components/CardContainer";
import VisionContainer from "../components/HomePage/VisionContainer";
import { Card } from "../components/blog/Card";
import Navbar from "../components/NavBar";
import Stats from "../components/HomePage/Stats";
import Footer from "../components/Footer";
import MemoryGameCard from "../components/HomePage/MemoryGameCard";
import Swiper from "../components/HomePage/Swiper";
import PredictionCard from "../components/HomePage/PredictionCard";

const Home = () => {
  return (
    <>
      <NavBarTest></NavBarTest>
      {/* <Swiper></Swiper> */}
      <LeftContent></LeftContent>
      {/* <Stats></Stats> */}
      <VisionContainer></VisionContainer>
      <CardContainer></CardContainer>
      {/* <CardContainer></CardContainer> */}
      <Stats></Stats>
      <MemoryGameCard></MemoryGameCard>
      <PredictionCard></PredictionCard>
      <Footer></Footer>
      {/* <VisionContainer></VisionContainer> */}
    </>
  );
};

export default Home;
