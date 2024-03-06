// Popup.jsx

import React from 'react';

const Popup = ({ person, onClose, onSubmit }) => {
  const handleSubmit = () => {
    const formData = {
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
      note: document.getElementById('note').value,
    };
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 overflow-y-auto h-screen px-4 md:px-8">
      <div className="relative z-10 w-full max-w-sm mx-auto mt-4">
        <div className="shadow-lg rounded-lg overflow-hidden bg-white">
          <div className="p-4 border-b border-gray-200">
            <h5 className="text-lg font-medium leading-6 text-gray-900">
              Book Appointment
            </h5>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Select Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="mt-1 p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md border border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Select Time Slot
                </label>
                <select
                  id="time"
                  name="time"
                  className="mt-1 p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md border border-gray-300 shadow-sm"
                >
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  {/* ... other time slots */}
                </select>
              </div>
            </div>
            <textarea
              id="note"
              name="note"
              rows={4}
              className="mt-4 w-full p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block rounded-md border border-gray-300 shadow-sm"
              placeholder="Sample Note"
            />
          </div>

          <div className="flex justify-end items-center p-4 border-t border-gray-200">
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="ml-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
