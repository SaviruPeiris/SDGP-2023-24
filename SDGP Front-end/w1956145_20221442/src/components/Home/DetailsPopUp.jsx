import React from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// Component for displaying details popup of a property
const DetailsPopUp = ({ property, showModal, toggleModal }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!property) {
        return <div>Select a property to view details.</div>;
    }

    const { type, price, description, location, picture, url, bedrooms, tenure } = property;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % picture.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + picture.length) % picture.length);
    };

    return (
        <div>
            {showModal && (
                <div className="modal d-flex align-items-center justify-content-center" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)', height: '100vh' }}>
                    <div className="" role="document" style={{ width: '80%', maxWidth: '800px' }}>
                        <div className="modal-content" style={{ height: '650px', maxHeight: '80vh', overflowY: 'auto' }}>
                            <div className="modal-header">
                                <h5 className="modal-title">{type}</h5>
                                <button type="button" className="close" onClick={toggleModal}>
                                    <span aria-hidden="true"><i className="fa fa-times" aria-hidden="true"></i></span>
                                </button>
                            </div>
                            <div style={{ position: 'relative', width: '100%', height: '500px' }} className="modal-body d-flex align-items-center justify-content-center">
                                {/* Previous and Next arrow buttons */}
                                {currentIndex !== 0 &&
                                    <button onClick={prevSlide} className="left-arrow">
                                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                    </button>
                                }
                                {currentIndex !== picture.length - 1 &&
                                    <button onClick={nextSlide} className="right-arrow" >
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </button>
                                }
                                {/* Displaying main image */}
                                <img
                                    src={picture[currentIndex]}
                                    alt={picture[currentIndex]}
                                    className="card-img-top d-block mx-auto"
                                    style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '5px' }}
                                />
                            </div>
                            {/* Thumbnail Images */}
                            <div className="modal-body" style={{ height: '100px' }}>
                                <div className='thumbnail-card d-flex align-items-center justify-content-start gap-2' style={{ overflowX: 'auto' }}>
                                    {picture.map((item, index) => (
                                        <img
                                            key={index}
                                            src={item}
                                            alt={`Item ${index}`}
                                            className={`${index === currentIndex ? 'thumbnail-active' : null}`}
                                            style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px', cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                            onClick={() => setCurrentIndex(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* Overview and Floor Plan Tabs */}
                            <div className="modal-body">
                                <Tabs>
                                    <TabList>
                                        <Tab>Overview</Tab>
                                        <Tab>Description</Tab>
                                        <Tab>Floor Plan</Tab>
                                        <Tab>Map</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <p><b>Type: </b>{type}</p>
                                        <p><b>Price: </b>Rs. {price}/=</p>
                                        <p><b>Beds: </b>{bedrooms}</p>
                                        <p><b>Tenure: </b>{tenure}</p>
                                        <p><b>Date Added: </b>{property.added.day}<sup>th</sup> {property.added.month} {property.added.year}</p>
                                        <p><b>Location: </b>{location}</p>
                                     
                                    </TabPanel>
                                    <TabPanel>
                                    {/* Description */}
                                    <div>
                                            <p><b>Description: </b></p>
                                            <div dangerouslySetInnerHTML={{ __html: description }} style={{ textAlign: 'justify' }} />
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        {/* Floor Plan content */}
                                        <img
                                            src={url}
                                            alt={type}
                                            className="card-img-top"
                                            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                        />
                                    </TabPanel>
                                    <TabPanel>
                                
                                        {/* Map */}
                                        <iframe
                                            width="100%"
                                            height="250"
                                            loading="lazy"
                                            allowFullScreen
                                            title="map"
                                            src={`https://maps.google.com/maps?width=100%25&height=250&hl=en&q=${encodeURIComponent(location)}+()&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                                        />
                                    </TabPanel>
                                </Tabs>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={toggleModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default DetailsPopUp;
