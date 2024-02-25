'use strict';
const express = require('express');
const constants = require('../utils/constants');
const { jwtVerifyToken } = require('../utils/auth');
const router = express.Router();




router.use(async (req, res, next) => {
    // Check if the route requires authentication
        if(!req.url.includes('/public')){
            if (!req.headers['x-auth-token']) {
                return res.status(constants.statuscodes.FORBIDDEN).json({
                    message: constants.messages.FORBIDDEN,
                });
            }
        
        try {
            const decodedData = await jwtVerifyToken(req.headers['x-auth-token']);
            req.tokenDecoded = decodedData;
            next()

        } catch (err) {
            return res.status(constants.statuscodes.UNAUTHORIZED).json({
                message: constants.messages.UNAUTHORIZED,
                error: err.message,
            });
        }
        
    }
    next()
});

router.use("/vendor", require('../modules/vendors/vendor.route'))

module.exports = router;
