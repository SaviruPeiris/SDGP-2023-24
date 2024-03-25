// Defining an asynchronous function named connectDB to establish connection with MongoDB
const mongoose = require('mongoose');

// Attempting to connect to MongoDB using the provided MONGO_URI environment variable
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,// Setting useNewUrlParser and useUnifiedTopology options to handle MongoDB connection
            useUnifiedTopology: true
        });
        //Printing the success,message after connecting with the mongoDB host 
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        //Handelling errors during connection
        console.error(`Error connecting to MongoDB: ${error.message}`.red.underline.bold);
       // Exiting the process with a status code of 1 to indicate connection failure
        process.exit(1);
    }
};

module.exports = connectDB;
