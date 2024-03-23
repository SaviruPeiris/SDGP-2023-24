const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        default: null
    },
    password :{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        default: null
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    age: {
        type: Number,
        default: null
    },
    existingDiseases: [{
        type: String
    }],
    currentMedications: [{
        type: String
    }],
    prescriptionPhoto: {
        type: String
    },
    mriScanPhoto: {
        type: String
    },
    profileImage: {
        type: String
    },

    status: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);
