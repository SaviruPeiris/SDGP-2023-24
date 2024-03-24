import {useEffect, useState} from "react";
//import viteLogo from "/vite.svg";
// import Card from "./components/Card";
import NavBarTest from "./components/NavBar/NavBarTest";

import "./App.css";
import Home from "./pages/Home";

import {BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import MemoryGame from "./pages/MemoryGame";
import PredictionPage from "./pages/prediction/PredictionPage";
import AboutPage from "./pages/aboutpage/aboutPage";
import ContactUsPage from "./pages/contactUsPage/ContactUs";
import AwarenessPage from "./pages/AwaranessPage/awareness";
import AwarenessHomePage from "./pages/AwaranessPage/Home";
import ImageUploadAwareness from "./pages/ImageUploadAwareness/ImageUploadAwareness"
import RegisterPage from "./pages/Loginpage/Register";                                 
import LoginPage from "./pages/Loginpage/Login";
import UserProfile from "./pages/UserProfile/UserProfile"
import DetailPage from "./pages/DetailsPage/DetailPage";
import EChannelingPage from "./pages/E-ChannelingPage/EChannelingPage";
import Footer from "./components/Footer";
// import Card from "./pages/AwaranessPage/Card";

function App() {

    const [userId, setUserId] = useState(localStorage.getItem("userId"));

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        if (!storedUserId) {
            // If no user ID in local storage, set userId state to null
            setUserId(null);
        } else {
            // If user ID exists in local storage, set userId state
            setUserId(storedUserId);
        }
    }, []);

    // const {PUBLIC_URL} = process.env

  return (
    // <>
    //   <NavBarTest></NavBarTest>
    //   <LeftContent></LeftContent>
    //   <CardContainer></CardContainer>
    // </>
    <BrowserRouter >
    <NavBarTest></NavBarTest>
        <Routes>
            {/* Routes accessible regardless of authentication */}
            <Route path="/registerPage" element={<RegisterPage />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route index element={<Home></Home>} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/memorygame" element={<MemoryGame />} />
                    {/* <Route path="/predictionPage" element={<PredictionPage />} /> */}
                    <Route path="/contactUsPage" element={<ContactUsPage />} />
                    <Route path="/awarenessPage" element={<AwarenessHomePage />} />
                    <Route path="/details/:id" element={<DetailPage />} />
            {/* Routes accessible only when userId is available */}
           
           
            {userId && (
                <>
                    {/* <Route path="/home" element={<Home />} /> */}
                  
                    <Route path="/imageUploadAwareness" element={<ImageUploadAwareness />} />
                    <Route path="/predictionPage" element={<PredictionPage />} />
                
                    <Route path="/eChannelingPage" element={<EChannelingPage />} />
                    <Route path="/myProfilePage" element={<UserProfile />} />
                    
                </>
            )}
            {/* Redirect to login page if userId is not available */}
            {!userId && <Route path="*" element={<Navigate to="/loginPage" />} />}
           
            
        </Routes>
            <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
