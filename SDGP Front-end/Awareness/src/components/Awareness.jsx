import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Awareness() {
    const location = useLocation();
    // Sample data for cards
    const cardsData = [
        {
            title: 'What is Dementia?',
            description: "Dementia is a progressive neurological disorder that impairs cognitive functions such as memory, reasoning, and communication. It often interferes with daily activities and can impact one's ability to maintain independence.",
            imageSrc: '/assets/images/pic1.jpg',
            link: '/details/card1'
        },
        {
            title: 'Resources for Health Care Providers',
            description: "Discover educational materials and training resources tailored for healthcare providers addressing dementia. Access a wealth of information designed to enhance their understanding and proficiency in managing and caring for individuals affected by these cognitive disorders.",
            imageSrc: '/assets/images/pic2.jpg',
            link: '/details/card2'
        },
        {
            title: 'Resources for Community and Public Health Professionals',
            description: "Explore resources tailored to enhance their expertise in promoting public health initiatives and addressing the unique challenges associated with Alzheimer's and related cognitive conditions.",
            imageSrc: '/assets/images/pic3.jpg',
            link: '/details/card3'
        }
    ];
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
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/awareness" style={location.pathname === '/awareness' ? { color: '#4d0076', fontWeight: 'bold' } : { color: '#999' }}>Awareness</Link>
                        </li>
                    </ul>
                    <div className="d-flex flex-column w-50 d-none d-lg-block">
                        <div className="d-flex justify-content-end gap-2">
                            <Link className="navbar-brand" to="/">CogniCare+</Link>
                        </div>
                    </div>
                    
                </div>

            </nav>
            <div className="container-fluid mt-5 mb-5">
                <div className="row py-4 h-100 justify-content-center">
                    {cardsData.map((card, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img src={card.imageSrc} className="card-img-top" alt={`Image for ${card.title}`} />
                                <div className="py-2">
                                    <h5 className="card-title text-center" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{card.title}</h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{card.description}</p>
                                </div>
                                <div className="card-footer">
                                    <Link to={card.link} className="btn btn-primary btn-block">Explore More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Awareness;