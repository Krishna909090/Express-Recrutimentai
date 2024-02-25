'use strict';

/* Importing the bcryptjs module. */
const bcrypt = require('bcryptjs');

/* A function that checks valid password. */
exports.checkValidPassword = (enteredPassword = '', hashedPassword = '') => {
    return bcrypt.compareSync(enteredPassword, hashedPassword);
};

/* This is a function that hashes the password. */
exports.hashingPassword = (password = '', saltLength = 10) => {
    return bcrypt.hashSync(password, saltLength);
};
