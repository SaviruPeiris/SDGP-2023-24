import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import LeftContent from "./components/LeftContent";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <LeftContent></LeftContent>
      {/* <Card></Card> */}
      <CardContainer></CardContainer>
    </>
  );
}

export default App;
