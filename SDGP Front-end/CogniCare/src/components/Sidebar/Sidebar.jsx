// Sidebar.js
import React from 'react';
import './Sidebar.css'; // Import CSS for styling
import { Link } from 'react-router-dom';


const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#section1">{props.Subheading1}</a></li>
        <li><a href="#section2">{props.Subheading2} </a></li>
        <li><a href="#section3">{props.Subheading3}</a></li>
        <li><Link to="/awarenessPage">Awareness page</Link></li>
        
      </ul>
    </div>
  );
}

export default Sidebar;


Sidebar.js
