import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import LeftContent from "./components/LeftContent";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";
import NavBarTest from "./components/NavBar/NavBarTest";

import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MemoryGame from "./pages/MemoryGame";
import PredictionPage from "./pages/prediction/PredictionPage";
import AboutPage from "./pages/aboutpage/aboutPage";
import AwarenessPage from "./pages/awareness/DetailsPage.jsx";

function App() {
  return (
    // <>
    //   <NavBarTest></NavBarTest>
    //   <LeftContent></LeftContent>
    //   <CardContainer></CardContainer>
    // </>

    <BrowserRouter>
      <Routes>
        <Route index element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/memorygame" element={<MemoryGame></MemoryGame>} />
        <Route path="/predictionPage" element={<PredictionPage></PredictionPage>} />
        <Route path="/about" element={<AboutPage></AboutPage>} />
        <Route path="/awarenessPage" element={<AwarenessPage></AwarenessPage>} />
        {/* <Route index element={<MemoryGame></MemoryGame>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
