/**
 * @Author Vinay Relangi
 * @Email relangi.vinay816@gmail.com
 * @CreatedOn 02/11/2023
 * @Type Helpers
 * @Module Helper functions for jwt
 * @FilePath services/jwt.js
 */

'use strict';

/* Importing the jsonwebtoken module. */
const jwt = require('jsonwebtoken');

const { encodeMessage, decodeMessage } = require('./encrypt');

/* Exporting the function jwtTokenGenerate to generate jwt token. */
exports.jwtGenerateToken = (data = {}) => {
    return jwt.sign(
        { data: encodeMessage(JSON.stringify(data)) },
        process.env.SECRET,
        {
            expiresIn: process.env.TOKEN_EXPIRE_TIME,
        },
    )
};

/* This is a function that is used to verify the token. */
exports.jwtVerifyToken = (token = '') => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return reject();
            } else {
                const _decoded = decodeMessage(decoded.data);
                return resolve(JSON.parse(_decoded));
            }
        });
    });
};
