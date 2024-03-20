import React from "react";
import NavBarTest from "../components/NavBar/NavBarTest";
import LeftContent from "../components/LeftContent";
import CardContainer from "../components/CardContainer";
import VisionContainer from "../components/HomePage/VisionContainer";
// import { Card } from "../components/blog/Card";
import Navbar from "../components/NavBar";
import Stats from "../components/HomePage/Stats";
import Footer from "../components/Footer";
import MemoryGameCard from "../components/HomePage/MemoryGameCard";
import Swiper from "../components/HomePage/Swiper";
import PredictionCard from "../components/HomePage/PredictionCard";
import HomeTopContent from "../components/HomePage/HomeTopContent";
import VisionMission from "../components/HomePage/VisionMission";
import HorizontalLineAnimation from "../components/HomePage/HorizontalLineAnimation";
import ChatbotCard from "../components/HomePage/ChatbotCard";
import EChannelingCard from "../components/HomePage/EChannelingCard";

const Home = () => {
  return (
    <>
      <NavBarTest></NavBarTest>
      <HomeTopContent></HomeTopContent>
      <VisionMission></VisionMission>
      <CardContainer></CardContainer>
      <Stats></Stats>
      <ChatbotCard></ChatbotCard>
      <PredictionCard></PredictionCard>
      <EChannelingCard></EChannelingCard>
      <MemoryGameCard></MemoryGameCard>
      <Footer></Footer>
    </>
  );
};

export default Home;
