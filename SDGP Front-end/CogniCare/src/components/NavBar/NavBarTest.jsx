import React from "react";
import "./NavBarTest.css";

const NavBarTest = () => {
  return (
    <>
      <header class="header">
        <h1 class="logo">CogniCare+</h1>
        <ul class="main-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Awareness Page</a>
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
