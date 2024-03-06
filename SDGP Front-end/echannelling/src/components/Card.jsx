import React from 'react';

const Card = ({ person, onBookClick }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img
        src={person.image}
        alt={person.name}
        className="w-full h-32 object-cover mb-4 rounded"
      />
      <h3 className="text-xl font-semibold mb-2">{person.name}</h3>
      <p>{person.description}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 focus:outline-none"
        onClick={() => onBookClick(person)}
      >
        Book
      </button>
    </div>
  );
};

export default Card;

