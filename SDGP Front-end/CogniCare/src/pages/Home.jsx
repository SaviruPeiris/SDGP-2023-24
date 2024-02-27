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

const Home = () => {
  return (
    <>
      <NavBarTest></NavBarTest>
      <LeftContent></LeftContent>
      {/* <Stats></Stats> */}
      <VisionContainer></VisionContainer>
      <CardContainer></CardContainer>
      {/* <CardContainer></CardContainer> */}
      <Stats></Stats>
      <MemoryGameCard></MemoryGameCard>
      <VisionContainer></VisionContainer>
    </>
  );
};

export default Home;
