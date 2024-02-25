const { isEmpty } = require('lodash');
const mongoose = require('mongoose');
const constants = require('../../src/utils/constants');
const { InternalServerError } = require('http-errors');

// console.log(process.env.MONGO_URL);

// if (isEmpty(process.env.MONGO_URL)) {
//     throw new InternalServerError(constants.DB_URL_NOT_FOUND);
// }

// Connect to MongoDB
async function connectToMongoDB() {
    try {
        await mongoose.connect('');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new InternalServerError(constants.DB_CONNECTION_ERROR);
    }
}

connectToMongoDB();

// Check if the connection is successful
const db = mongoose.connection;

db.on('error', (error) => {
    console.error('Connection error:', error);
});
  
db.once('open', () => {
    console.log('Connected to MongoDB');
});
