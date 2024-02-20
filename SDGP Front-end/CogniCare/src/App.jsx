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

function App() {
  return (
    // <>
    //   <NavBarTest></NavBarTest>
    //   <LeftContent></LeftContent>
    //   <CardContainer></CardContainer>
    // </>

    <BrowserRouter>
      <Routes>
        <Route index element = {<Home></Home>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
