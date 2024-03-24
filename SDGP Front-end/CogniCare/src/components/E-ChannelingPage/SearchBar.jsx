import React, { useState, useEffect } from "react";
import Card from "./Card"; // Assuming you have a Card component
import { psychologistData } from "../../assets/data/docsData";
import "../../pages/E-ChannelingPage/EChannelingPage.css";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Simulating fetching data from JSON file
    setData(psychologistData);
    setSearchResults(psychologistData);
  }, []);

  const handleSearchClick = () => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredData);
  };

  const handleResetClick = () => {
    setSearchTerm("");
    setSearchResults(data);
  };

  return (
    <div className="mb-10 items-center px-5 flex flex-col gap-2 bg-gray-200 py-10">
       <div className="text-center border shadow bg-body rounded px-5 py-4">
        <h2 className="text-3xl xl:text-4xl	text-violet-800">Search Doctors</h2>
        <p className="xl:text-2xl text-lg">
        Search Your Doctor and Book Your Appointment in one click
        </p>
      </div>

      <div className="container-e-channel mx-auto p-5">
        {/* searchBar */}
        <div className="flex items-center pb-4">
          <input
            type="text"
            placeholder="Search by Name.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mr-4"
          />
          <button
            onClick={handleSearchClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
          >
            Search
          </button>
          <button
            onClick={handleResetClick}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          >
            Reset
          </button>
        </div>
        {/* doc cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {searchResults.map((psychologist) => (
            <Card key={psychologist.id} psychologist={psychologist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
