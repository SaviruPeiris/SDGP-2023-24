import React from "react";
import "./NavBarTest.css";

import { Link } from "react-router-dom";

const NavBarTest = () => {
  return (
    <>
      <header class="header">
        <div className="logo">
          <Link to="/home" className="">
            <h1 class="logo">CogniCare+</h1>
          </Link>
        </div>
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
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default NavBarTest;
