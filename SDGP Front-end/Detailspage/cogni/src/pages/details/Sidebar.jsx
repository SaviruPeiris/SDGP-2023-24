// Sidebar.js
import React from 'react';
import './Sidebar.css'; // Import CSS for styling
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#section1">Eat a balanced diet</a></li>
        <li><a href="#section2">Healthy life </a></li>
        <li><a href="#section3">Resources</a></li>
        <li><Link to="/card">Awareness page</Link></li>
        
      </ul>
    </div>
  );
}

export default Sidebar;
