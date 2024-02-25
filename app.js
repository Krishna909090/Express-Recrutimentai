'use strict';

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();

// Middleware
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // Simplified log format
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))

require('./src/config/database')

// Configuration
const ENV = process.env.NODE_ENV || 'development';

//Checking the certificate verfication is needed or not
process.env.NODE_TLS_REJECT_UNAUTHORIZED = ENV !== 'production' ? '0' : '1';

if (ENV === 'development') {
    app.use(cors());
}

app.use('/api/v1', require('./src/routes/routes'));

module.exports = app;

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err, "adsaada");
    process.exit(1);
});
