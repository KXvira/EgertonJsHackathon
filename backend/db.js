const mongoose = require('mongoose');

/**
 * Connects to MongoDB using Mongoose
 * @param {string} uri - MongoDB connection string
 * @returns {Promise} Mongoose connection
 */
const connectDB = async (uri = 'mongodb://localhost:27017/mydb') => {
    try {
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
