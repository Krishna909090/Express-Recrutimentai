/**
 * @Author Vinay Relangi
 * @Email relangi.vinay816@gmail.com
 * @CreatedOn 20/11/2023
 * @Type Indication Schema
 * @Module Indication Schema
 * @FilePath controllers/indication/indicationSchema.js
 */

'use strict';

/* Importing modules */
const Joi = require('joi');


 async function vendorRegister(dataObj) {
    const schema = Joi.object({
        name: Joi.string().allow(null).required(),
        email: Joi.string().email().allow(null).required(),
        password: Joi.string()
        .min(8) // Minimum length of 8 characters
        .required()
        .pattern(new RegExp('^(?=.*[!@#$%^&*()-_=+{};:,<.>])[a-zA-Z0-9!@#$%^&*()-_=+{};:,<.>]{8,}$')) // Regex pattern with special characters
        .messages({
            'string.pattern.base': 'Password must contain at least one special character',
            'string.min': 'Password must be at least {#limit} characters long',
        }),
        started_On: Joi.string().allow(null).required(),
        address1 : Joi.string().allow(null).required(),
        address2 : Joi.string().allow(null).required(),
        city: Joi.string().allow(null).required(),
        state :Joi.string().allow(null).required(),
        zip : Joi.string().allow(null).required(),
        created_at:Joi.string().allow(null).required(),
        created_By: Joi.string().allow(null).required(),
        modified_at : Joi.string().allow(null).required(),
        modified_By :Joi.string().allow(null).required(),
    });

    const validation = schema.validate(dataObj, { abortEarly: false });
    return validation.error;
};

module.exports = {
    vendorRegister
};
