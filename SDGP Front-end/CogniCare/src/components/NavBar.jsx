import React from "react";
import "./Navbar.css"; // Import the CSS file
import CogniLogo from "../assets/images/CogniLogo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={CogniLogo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <div className="nav-link">
              <a href="#">E-News</a>
            </div>
          </li>
          <li>
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
