import React, { useState } from 'react';
import Card from './Card';
import Popup from './Popup';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleOpenPopup = (person) => {
    setSelectedPerson(person);
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
    setSelectedPerson(null);
    setSuccessMessage('');
  };

  const handleBookSubmit = (formData) => {
    // Simulating a successful submission
    console.log('Booking submitted with data:', formData);

    // Update the success message
    setSuccessMessage('Your appointment has been scheduled successfully!');

    // Close the popup after submission (you can adjust this based on your logic).
    // Note: We're keeping the popup open here for demonstration purposes.
    // In a real scenario, you might want to close it immediately.
    // handleClosePopup();
  };

  const peopleData = [
    {
      id: 1,
      name: 'John Doe',
      image: 'john-doe.jpg', // Replace with actual image path
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 1,
      name: 'John Doe',
      image: 'john-doe.jpg', // Replace with actual image path
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 1,
      name: 'John Doe',
      image: 'john-doe.jpg', // Replace with actual image path
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 1,
      name: 'John Doe',
      image: 'john-doe.jpg', // Replace with actual image path
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 1,
      name: 'John Doe',
      image: 'john-doe.jpg', // Replace with actual image path
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 1,
      name: 'John Doe',
      image: 'john-doe.jpg', // Replace with actual image path
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
  return (
    <div className="mb-10 items-center px-5 flex flex-col gap-2">
      <h2 className="font-bold text-4xl tracking-wide mt-12">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-gray-500 text-xl">
        Search Your Doctor and Book Appointment in one click
      </h2>
      <div className="container mx-auto p-5">
        <div className="mb-4 flex items-center">
          {/* Search input and buttons */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded mr-2"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
          >
            Search
          </button>
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded ml-2 focus:outline-none"
          >
            Reset
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
          {peopleData.map((person) => (
            <Card key={person.id} person={person} onBookClick={handleOpenPopup} />
          ))}
        </div>
      </div>

      {isOpen && (
        <Popup
          person={selectedPerson}
          onClose={handleClosePopup}
          onSubmit={handleBookSubmit}
        />
      )}

      {/* Display success message */}
      {successMessage && (
        <div className="fixed bottom-0 right-0 p-4 bg-green-500 text-white">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default App;

