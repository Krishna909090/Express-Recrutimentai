'use strict';

/* Importing modules */

const express = require('express');
const router = express.Router();

const vendorController = require('./vendor.controller');

router.post('/public/vendor-register', vendorController.createVendor);
router.post('/public/vendor-login', vendorController.authenticate);
router.post('/public/vendor-forgot-password', vendorController.forgotPassword)

module.exports = router;
