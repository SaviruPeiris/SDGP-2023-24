const mongoose = require('mongoose');

// Define the appointment schema
const appointmentSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    doctor:{
        type: String,
        required: true
    },
    // petName: {
    //     type: String,
    //     required: true
    // },
    ownerName: {
        type: String,
        required: true
    },
    aptNotes: {
        type: String,
        default: ''
    },
    aptDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Appoinment', appointmentSchema);
