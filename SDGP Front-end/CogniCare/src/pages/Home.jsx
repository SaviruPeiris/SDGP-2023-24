import React from "react";
import CardContainer from "../components/CardContainer";
import Stats from "../components/HomePage/Stats";
import MemoryGameCard from "../components/HomePage/MemoryGameCard";
import PredictionCard from "../components/HomePage/PredictionCard";
import HomeTopContent from "../components/HomePage/HomeTopContent";
import VisionMission from "../components/HomePage/VisionMission";
import ChatbotCard from "../components/HomePage/ChatbotCard";
import EChannelingCard from "../components/HomePage/EChannelingCard";

const Home = () => {
  return (
    <>
      <HomeTopContent></HomeTopContent>
      <VisionMission></VisionMission>
      <CardContainer></CardContainer>
      <Stats></Stats>
      <ChatbotCard></ChatbotCard>
      <PredictionCard></PredictionCard>
      <EChannelingCard></EChannelingCard>
      <MemoryGameCard></MemoryGameCard>
    </>
  );
};

export default Home;
