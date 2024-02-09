import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-color text-white">
            <div className="container">
                <div className="row py-4">
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <small>
                            <address className="text-secondary">
                                27 Monmouth St, London, United Kingdom<br />
                                Telephone: +94 77 753 4178 <br />
                                Email: propfinder@gmail.com 
                            </address>
                        </small>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><small><Link to="/" className="text-decoration-none text-secondary">Home</Link></small></li>
                            <li><small><Link to="/about" className="text-decoration-none text-secondary">About</Link></small></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled ">
                            <li><small><a className="text-decoration-none" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></small></li>
                            <li><small><a className="text-decoration-none" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></small></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="text-center">
                            &copy; 2024 Property Finder. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
