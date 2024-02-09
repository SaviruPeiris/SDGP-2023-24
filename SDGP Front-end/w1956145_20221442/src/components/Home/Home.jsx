import React, { useState } from 'react';
import AdvanceSearchForm from './AdvanceSearchForm';
import Property from './Property';
import DetailsPopUp from './DetailsPopUp';
import propertiesData from '../../data/properties.json'; // Assuming you have this JSON data in the src directory
import FavoriteProperties from './FavoriteProperties';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const monthToNumber = {
    "January": 0,
    "February": 1,
    "March": 2,
    "April": 3,
    "May": 4,
    "June": 5,
    "July": 6,
    "August": 7,
    "September": 8,
    "October": 9,
    "November": 10,
    "December": 11
};

function Home() {
    const location = useLocation();
    const { data } = propertiesData;
    const [properties, setProperties] = useState(data); // Set initial properties to data from JSON
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [selectedFavorite, setSelectedFavorite] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
    const [normalSearch, setNormalSearch] = useState("");


    // Function to advance search
    const advanceSearch = (filters) => {
        let filteredItems = filters;

        filteredItems = data.filter(property => {

            // Check price filter
            if ((filters.minPrice && property.price < filters.minPrice) || (filters.maxPrice && property.price > filters.maxPrice)) {
                return false;
            }

            // Check bedrooms filter
            if ((filters.minBedrooms && property.bedrooms < filters.minBedrooms) || (filters.maxBedrooms && property.bedrooms > filters.maxBedrooms)) {
                return false;
            }
            // Check type
            if (filters.propertyType && filters.propertyType.toLowerCase() !== 'any' && property.type.toLowerCase() !== filters.propertyType.toLowerCase()) {
                return false;
            }

            // Check date added filter
            if (filters.startDate || filters.endDate) {
                console.log("filters.startDate", filters.startDate);
                console.log("filters.endDate", filters.endDate);

                const monthNumber = monthToNumber[property.added.month];
                // Set added date to 12pm to avoid timezone issues
                const addedDate = new Date(property.added.year, monthNumber, property.added.day).setHours(12, 0, 0, 0);
                // Set start and end dates to 12am and 11:59pm to avoid timezone issues
                const startDate = new Date(filters.startDate).setHours(0, 0, 0, 0);
                // Set end date to 11:59pm to avoid timezone issues
                const endDate = new Date(filters.endDate).setHours(23, 59, 59, 999);

                // Check if start date is provided and added date is after it
                if (filters.startDate) {
                    if ((addedDate <= startDate)) {
                        return false;
                    }
                }
                // Check if both start and end dates are provided and added date is between them
                if (filters.startDate && filters.endDate) {
                    if ((addedDate <= startDate) || (addedDate >= endDate)) {
                        return false;
                    }
                }
            }

            // Check postcode area filter postcode area (1st part of the postcode, e.g. BR1, NW1) with lowercase
            if (filters.postcodeArea && !property.location.toLowerCase().includes(filters.postcodeArea.toLowerCase())) {
                return false;
            }

            return true;
        });

        setProperties(filteredItems);
    };

    // Function to handle property selection
    const handlePropertyClick = (property) => {
        setSelectedProperty(property);
    };

    // Reset properties to original list from JSON
    const resetProperties = () => {
        setProperties(data);
        setNormalSearch("");
    };

    const addToFavorites = (property) => {
        if (!favorites.includes(property)) {
            setFavorites(prevFavorites => [...prevFavorites, property]);
        } else {
            alert('Property already in favorites');
        }
    };
    
    const handleDragStart = (property) => {
        setSelectedFavorite(property);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (selectedFavorite) {
            // add validation to check if property is already in favorites already
            // check if property is already in favorites
            if (favorites.includes(selectedFavorite)) {
                alert('Property already in favorites');
                return;
            }

            addToFavorites(selectedFavorite);

        }
    };

    const handleDragRemove = (property) => {
        setSelectedFavorite(property);
    };

    const handleDragRemoveOver = (e) => {
        e.preventDefault();
    }

    const handleRemoveDrop = (e) => {
        e.preventDefault();
        if (selectedFavorite) {
            setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite !== selectedFavorite));
        }
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleAdvancedSearch = () => {
        setIsAdvancedSearch(!isAdvancedSearch);
    }

    const handleRemoveFavorite = (property) => {
        setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite !== property));
    }

    const handleClearFavorites = () => {
        setFavorites([]);
    }

    useEffect(() => {
        const filteredItems = data.filter((property) =>
            property.type.toLowerCase().includes(normalSearch.toLowerCase()) ||
            property.description.toLowerCase().includes(normalSearch.toLowerCase()) ||
            property.price.toString().includes(normalSearch)
        );
        setProperties(filteredItems);
    }, [data, normalSearch]);

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
                        {/* Buttons */}
                        <div className="d-flex justify-content-end gap-2">
                            <div className="min-w-50">
                                <input type="text" className="form-control w-100" placeholder="Search" onChange={(e) => setNormalSearch(e.target.value)} value={normalSearch} />
                            </div>
                            <button className="btn btn-primary mr-2 text-nowrap" onClick={()=>resetProperties()}>Reset</button>
                            <button className="btn btn-primary text-nowrap" onClick={()=> handleAdvancedSearch()}>Advanced Search</button>
                        </div>

                    </div>
                </div>

            </nav>
            {/* Advanced Search Form (Conditional Rendering) */}
            {isAdvancedSearch &&
                <div style={{ marginTop: '90px' }}>
                    <AdvanceSearchForm onAdvanceSearch={advanceSearch} />
                </div>
            }


            <div className="container-fluid mt-5">

                <div className="row">
                    <hr className="border-2" />
                    {/* Right Side: Favorites List (Shown on Small Screens) */}
                    <div className="col-md-3 pt-3 d-md-none" style={{ borderLeft: '2px solid #ccc' }} onDragOver={handleDragOver} onDrop={handleDrop}>
                        <FavoriteProperties
                            favorites={favorites}
                            onPropertyClick={handlePropertyClick}
                            handleDragOver={handleDragOver}
                            handleDrop={handleDrop}
                            handleDragRemove={handleDragRemove}
                            toggleModal={toggleModal}
                            handleRemoveFavorite={handleRemoveFavorite}
                            handleClearFavorites={handleClearFavorites}
                        />
                    </div>

                    {/* Left Side: Property List and Details */}
                    <div className="col-md-9 pt-3">
                        <div onDragOver={handleDragRemoveOver} onDrop={handleRemoveDrop}>
                            <Property
                                properties={properties}
                                onPropertyClick={handlePropertyClick}
                                addToFavorites={addToFavorites}
                                handleDragStart={handleDragStart}
                                toggleModal={toggleModal}

                            />
                        </div>
                        {showModal &&
                            <DetailsPopUp property={selectedProperty} showModal={showModal} toggleModal={toggleModal} />
                        }
                    </div>

                    {/* Right Side: Favorites List (Shown on Larger Screens) */}
                    <div className="col-md-3 pt-3 d-none d-md-block" style={{ borderLeft: '2px solid #ccc' }} onDragOver={handleDragOver} onDrop={handleDrop}>
                        <FavoriteProperties
                            favorites={favorites}
                            onPropertyClick={handlePropertyClick}
                            handleDragOver={handleDragOver}
                            handleDrop={handleDrop}
                            handleDragRemove={handleDragRemove}
                            toggleModal={toggleModal}
                            handleRemoveFavorite={handleRemoveFavorite}
                            handleClearFavorites={handleClearFavorites}
                        />
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Home;
