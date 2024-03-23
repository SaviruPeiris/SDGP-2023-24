import React, { useState } from 'react';
import AddAppointment from './AddAppointment'; // Import the AddAppointment component

const Card = ({ psychologist, onBookClick, onSendAppointmentInfo, lastId }) => {
  const [showAppointmentPopup, setShowAppointmentPopup] = useState(false);
console.log(psychologist)
  const handleBookClick = () => {
    setShowAppointmentPopup(true);
    onBookClick(psychologist); // Pass psychologist data to the parent component
  };

  if (!psychologist) {
    return null;
  }

  const { image, name, specializations, contactInformation, hospital, workingHours } = psychologist;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between mt-8">
      <div className="text-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 object-cover rounded-full mx-auto mb-2"
        />
        <h3 className="text-3xl text-purple-800 font-semibold mb-2">{name}</h3>
        <p className="text-purple-700 text-lg">{hospital}</p>
      </div>
      <div className="mb-6">
        <h4 className="text-xl text-purple-600 font-semibold mb-2">Specializations:</h4>
        <ul className="list-disc list-inside">
          {specializations && specializations.length > 0 ? (
            specializations.map((specialization, index) => (
              <li key={index} className="mb-1 text-lg">{specialization}</li>
            ))
          ) : (
            <li className="text-lg ">No specializations listed</li>
          )}
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-xl text-purple-600 font-semibold mb-2">Contact Information:</h4>
        <p className="text-lg"><strong>Email:</strong> {contactInformation?.email || 'Not provided'}</p>
        <p className="text-lg"><strong>Phone:</strong> {contactInformation?.phone || 'Not provided'}</p>
      </div>
      <div>
        <p className="text-lg"><strong>Working Hours:</strong> {workingHours || 'Working hours not provided'}</p>
      </div>
      
      <button>
 
        {/* Render the appointment popup based on the state */}
      {(
        <AddAppointment psychologist={psychologist} lastId={lastId} />
      )}
      
      </button>
      
    </div>
  );
};

export default Card;
