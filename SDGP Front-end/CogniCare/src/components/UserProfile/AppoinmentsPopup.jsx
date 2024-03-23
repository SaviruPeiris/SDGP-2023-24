import React, {useEffect, useState} from 'react';
import axios from "axios";

const AppointmentsPopup = ({ onClose }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments data when the component mounts
    const fetchData = async () => {
      try {
        const userId=localStorage.getItem("userId")

        const response = await axios.get('http://localhost:3000/api/v1/appointments/'+userId);
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchData();

    // Cleanup function to cancel any pending requests if the component unmounts
    return () => {};
  }, []);

  const deleteAppointment = async (appointmentData) => {
    console.log(appointmentData)
    const { id } = appointmentData; // Extracting the ID from appointmentData
    console.log(`Delete appointment with ID ${appointmentData._id}`);
    try {
      await axios.delete(`http://localhost:3000/api/v1/appointments/${appointmentData._id}`);
      // Update appointments state after deletion
      setAppointments(appointments.filter(appointment => appointment._id !== appointmentData._id));
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75" style={{zIndex: 2000000}}>
      <div className="bg-white p-8 rounded-lg w-3/4 h-3/4">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">My Appointments</h2>
          <button className="text-xl" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="overflow-y-auto bg-gray-100 h-3/4 p-4 rounded-lg">
          {/* Scrollable content area */}
          {appointments.map(appointmentData => (
              <div className="flex flex-col mb-4 bg-white rounded-lg p-2 shadow-md">

                <div className="text-lg font-semibold mb-2">Doctor Name: {appointmentData.doctor}</div>
                <div className="text-lg font-semibold mb-2">Pet Name: {appointmentData.petName}</div>
                <div className="text-lg font-semibold mb-2">Owner Name: {appointmentData.ownerName}</div>
                <div className="flex mb-1">
                  <span className="font-semibold mr-1">Appointment Date:</span>
                  <span>{new Date(appointmentData.aptDate).toLocaleString()}</span>
                </div>
                <p className="text-sm">Appointment Notes: {appointmentData.aptNotes}</p>
                <button className="text-red-500 mt-2" onClick={() => deleteAppointment(appointmentData)}>
                  Delete
                </button>
              </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default AppointmentsPopup;
