import { useState } from "react";
import viteLogo from "/vite.svg";
import Navbar from "./components/NavBar";
import LeftContent from "./components/LeftContent";
import CardContainer from "./components/CardContainer";
// import Card from "./components/Card";
import NavBarTest from "./components/NavBar/NavBarTest";

import "./App.css";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MemoryGame from "./pages/MemoryGame";
import PredictionPage from "./pages/prediction/PredictionPage";
import AboutPage from "./pages/aboutpage/aboutPage";
import ContactUsPage from "./pages/contactUsPage/ContactUs";
import AwarenessPage from "./pages/AwaranessPage/awareness";
import AwarenessHomePage from "./pages/AwaranessPage/Home";
import ImageUploadAwareness from "./pages/ImageUploadAwareness/ImageUploadAwareness";
import RegisterPage from "./pages/Loginpage/Register";
import LoginPage from "./pages/Loginpage/Login";
import UserProfile from "./pages/UserProfile/UserProfile";
import DetailPage from "./pages/DetailsPage/DetailPage";
import EChannelingPage from "./pages/E-ChannelingPage/EChannelingPage";
// import Card from "./pages/AwaranessPage/Card";
import ScrollToTopOnPageChange from "./components/ScrollToTopOnPageChange";

function App() {
  return (
    // <>
    //   <NavBarTest></NavBarTest>
    //   <LeftContent></LeftContent>
    //   <CardContainer></CardContainer>
    // </>
    
    <BrowserRouter>
      <ScrollToTopOnPageChange />
      <Routes>
        <Route index element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/memorygame" element={<MemoryGame></MemoryGame>} />
        <Route
          path="/predictionPage"
          element={<PredictionPage></PredictionPage>}
        />
        <Route
          path="/imageUploadAwareness"
          element={<ImageUploadAwareness></ImageUploadAwareness>}
        />
        <Route path="/registerPage" element={<RegisterPage></RegisterPage>} />
        <Route path="/loginPage" element={<LoginPage></LoginPage>} />
       
        <Route
          path="/predictionPage"
          element={<PredictionPage></PredictionPage>}
        />
        <Route path="/about" element={<AboutPage></AboutPage>} />
        <Route
          path="/contactUsPage"
          element={<ContactUsPage></ContactUsPage>}
        />
        <Route
          path="/awarenessPage"
          element={<AwarenessHomePage></AwarenessHomePage>}
        />
        <Route
          path="/eChannelingPage"
          element={<EChannelingPage></EChannelingPage>}
        />
        <Route path="/myProfilePage" element={<UserProfile></UserProfile>} />
        <Route path="/details/:id" element={<DetailPage></DetailPage>} />
        {/* <Route exact path="/card" component={<Card></Card>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
