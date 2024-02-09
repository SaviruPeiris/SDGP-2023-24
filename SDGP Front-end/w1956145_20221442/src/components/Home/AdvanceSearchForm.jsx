import React, { useState } from 'react';
import { DropdownList, NumberPicker, DateTimePicker, Combobox } from 'react-widgets';
import "react-widgets/styles.css";

const AdvanceSearchForm = ({ onAdvanceSearch }) => {
    const inputStyle = {
        marginBottom: '5px',
        borderRadius: '5px',
        width: '100%',
        fontSize: '16px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        width: '100%',
        marginBottom: '5px',
    };
    // State variables to store form input values
    const [propertyType, setPropertyType] = useState(null);
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [minBedrooms, setMinBedrooms] = useState(null);
    const [maxBedrooms, setMaxBedrooms] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [postcodeArea, setPostcodeArea] = useState(null);

    const handleSearchClick = () => {
        // Construct filters object with form input values
        const filters = {
            propertyType: propertyType,
            minPrice: minPrice,
            maxPrice: maxPrice,
            minBedrooms: minBedrooms,
            maxBedrooms: maxBedrooms,
            startDate: startDate,
            endDate: endDate,
            postcodeArea: postcodeArea
        };
        // Trigger the parent component's search function with filters
        onAdvanceSearch(filters);
    };

    const handleClearClick = () => {
        setPropertyType(null);
        setMinPrice(null);
        setMaxPrice(null);
        setMinBedrooms(null);
        setMaxBedrooms(null);
        setStartDate(null);
        setEndDate(null);
        setPostcodeArea(null);

        if (onAdvanceSearch) {
            onAdvanceSearch({});
        }
    }
    // Render the advanced search form
    return (
        <div className='p-3 border border-4 rounded' style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h3 className='text-center text-primary'>
                Advanced Search
            </h3>
            {/* Property Type Dropdown */}
            <DropdownList
                data={['House', 'Flat', 'Any']}
                value={propertyType}
                onChange={value => setPropertyType(value)}
                placeholder="Select Property Type"
                style={inputStyle}
            />
            
            {/* Postcode Area Input */}
            <input type="text"
                className="form-control"
                placeholder="Postcode Area"
                value={postcodeArea}
                onChange={e => setPostcodeArea(e.target.value)}
                style={inputStyle}
            />

            {/* Min Bedrooms NumberPicker */}
            <NumberPicker
                style={inputStyle}
                value={minBedrooms}
                onChange={value => setMinBedrooms(value)}
                placeholder="Min Bedrooms"
                min={0}
            />

            {/* Max Bedrooms NumberPicker */}
            <NumberPicker
                style={inputStyle}
                value={maxBedrooms}
                onChange={value => setMaxBedrooms(value)}
                placeholder="Max Bedrooms"
                min={0}
            />

            {/* Min Price NumberPicker */}
            <NumberPicker
                style={inputStyle}
                format="currency"
                value={minPrice}
                onChange={value => setMinPrice(value)}
                placeholder="Min Price"
                min={0}
            />

            {/* Max Price NumberPicker */}
            <NumberPicker
                style={inputStyle}
                format="currency"
                value={maxPrice}
                onChange={value => setMaxPrice(value)}
                placeholder="Max Price"
                min={0}
            />

            {/* Start Date DateTimePicker */}
            <DateTimePicker
                style={inputStyle}
                // time={false}
                value={startDate}
                onChange={value => setStartDate(value)}
                placeholder="Start Date"
            />

            {/* End Date DateTimePicker */}
            <DateTimePicker
                style={inputStyle}
                // time={false}
                value={endDate}
                onChange={value => setEndDate(value)}
                placeholder="End Date"
            />
            
            <button className="btn btn-primary" style={buttonStyle} onClick={handleSearchClick}>Search</button>

            <button className="btn btn-primary" style={buttonStyle} onClick={handleClearClick}>Clear</button>
        </div>
    );
};

export default AdvanceSearchForm;
