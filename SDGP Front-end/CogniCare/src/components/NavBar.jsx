import React from "react";
// import "./Navbar.css"; // Import the CSS file
// import CogniLogo from "../assets/images/CogniLogo.png";
import Awareness from "../pages/home/Home";

const Navbar = () => {
  return (
    <nav data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div className="logo">
        {/* <img src={CogniLogo} alt="Logo" /> */}
      </div>

      <div className="navBarLinks">
        <ul>
          <li>Awareness Page</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* <div className="navbar-links">
        <ul>
          <li>
            <div className="navLink">
              <a href="../pages/home/Home">Awareness Page</a>
            </div>
          </li>
          <li>
            <div className="navLink">
              About
            </div>
          </li>
          <li>
            <div className="navLink">
              <a href="#">Services</a>
            </div>
          </li>
          <li>
            <div className="navLink">
              <a href="#">Contact</a>
            </div>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
