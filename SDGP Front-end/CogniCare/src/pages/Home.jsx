import React from "react";
import NavBarTest from "../components/NavBar/NavBarTest";
import LeftContent from "../components/LeftContent";
import CardContainer from "../components/CardContainer";
import VisionContainer from "../components/HomePage/VisionContainer";
import { Card } from "../components/blog/Card";
import Navbar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBarTest></NavBarTest>
      <LeftContent></LeftContent>
      <VisionContainer></VisionContainer>
      <CardContainer></CardContainer>
      <VisionContainer></VisionContainer>
      <CardContainer></CardContainer>
      <Navbar></Navbar>
      <LeftContent></LeftContent>
    </>
  );
};

export default Home;
