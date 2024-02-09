import React from 'react';
import { Link, useLocation } from "react-router-dom";

function About() {
    const location = useLocation();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-color fixed-top p-2 px-3">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex flex-column w-50 d-lg-none">
                    <Link className="navbar-brand" to="/">Property Finder</Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/"
                                style={location.pathname === '/' ? { color: '#4d0076', fontWeight: 'bold' } : { color: '#999' }}
                            >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" style={location.pathname === '/about' ? { color: '#4d0076', fontWeight: 'bold' } : { color: '#999' }}>About</Link>
                        </li>
                    </ul>
                    <div className="d-flex flex-column w-50 d-none d-lg-block">
                        <div className="d-flex justify-content-end gap-2">
                            <Link className="navbar-brand" to="/">Property Finder</Link>
                        </div>
                    </div>
                    <div className="d-flex flex-column w-100 w-md-50">


                    </div>
                </div>

            </nav>
            <div className="container-fluid mt-5" style={{ height: 'calc(100vh - 247px)' }}>
                <div className="row py-5 h-100 justify-content-center ">
                    <div className="col-md-10">
                        <div className="card h-100">
                            <div className="py-2">
                                <h5 className="card-title text-center">Why Us</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Welcome to our website, where your journey to finding the perfect home begins with us. At Property Finder, we understand that 
                                searching for a house or flat is not just about bricks and mortar; it's about finding a place that resonates with your lifestyle and aspirations. What sets us 
                                apart is our commitment to simplifying this process for you. With an intuitive and user-friendly interface, we offer a seamless browsing experience, allowing you to explore various 
                                properties tailored to your unique preferences. Our extensive database is regularly updated to ensure you have access to the latest listings. Trust us to be your guide in the quest for your dream 
                                home.</p>
                                <p className="card-text"><b>Email: </b>propfinder@gmail.com  </p>
                                <p className="card-text"><b>Contact Number: </b>+94 77 753 4178  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
