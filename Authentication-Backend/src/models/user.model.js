const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String
    },
    
})

module.exports = mongoose.model('User', userSchema)