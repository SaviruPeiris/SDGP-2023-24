import React, { useState } from "react";
import "./NavBarTest.css";

import { Link } from "react-router-dom";
import Popup from "../popup/PoupuWindow";
import { FaPlus } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";
import UserProfile from "../../assets/images/UserProfileimages/User_Image.jpg";

// import Logo from "../../assets/images/CogniCareLogo.png";

const NavBarTest = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const websiteUrl = "http://localhost:8501/";

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <>
      <header class="header" data-aos="fade-down">
        <div className="logo">
          <Link to="/home" className="">
            <h1 class="logo">CogniCare+</h1>
          </Link>
        </div>
        {/* <div className="logo">
          <Link to="/home" className="">
            <img src={Logo}></img>
          </Link>
        </div> */}
        <ul class="main-nav">
          <li>
            {/* <a href="#">Home</a> */}
            <Link to="/home" className="">
              Home
            </Link>
          </li>
          <li>
            {/* <a href="#">About</a> */}
            <Link to="/about" className="">
              About
            </Link>
          </li>
          <li>
            {/* <a href="#">Awareness Page</a> */}
            <Link to="/awarenessPage" className="">
              Awareness Page
            </Link>
          </li>
          <li>
            {/* <a href="#">Contact</a> */}
            <Link to="/contactUsPage" className="">
              Contact
            </Link>
          </li>
          <li>
            {/* <a href="#">Contact</a> */}
            <Link to="/myProfilePage" className="flex">
              <img className="w-8 mr-3 rounded-full" src={UserProfile} alt="" />
            </Link>
          </li>
        </ul>
      </header>

      {/* Floating Action Button */}
      <div
        className="btn btn-primary rounded-circle position-fixed d-flex align-items-center justify-content-center"
        style={{
          bottom: "20px",
          right: "20px",
          zIndex: "1000",
          width: "50px",
          height: "50px",
          backgroundColor: "#4CAF50",
          color: "#FFFFFF",
          border: "none",
        }}
        onClick={openPopup}
      >
        <TbMessageChatbot size={30} />
      </div>

      {/* Render Popup component */}
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        websiteUrl={websiteUrl}
      />
    </>
  );
};

export default NavBarTest;
