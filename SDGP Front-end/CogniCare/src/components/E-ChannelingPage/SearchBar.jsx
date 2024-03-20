import React, { useState, useEffect } from "react";
import Card from "./Card"; // Assuming you have a Card component
import psychologistData from "../../assets/data/docsData.json";
import "../../pages/E-ChannelingPage/EChannelingPage.css";

const App = () => {
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
    <div className="mb-10 items-center px-5 flex flex-col gap-2">
      <h2 className="font-bold text-4xl tracking-wide mt-12">
        Search <span className="">Doctors</span>
      </h2>
      <h2 className="text-gray-500 text-xl">
        Search Your Doctor and Book Appointment in one click
      </h2>
      <div className="container mx-auto p-5 ECCARD">
        {/* searchBar */}
        <div className="flex items-center mb-4">
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
        <div className="grid grid-cols-3 gap-4">
          {searchResults.map((psychologist) => (
            <Card key={psychologist.id} psychologist={psychologist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
