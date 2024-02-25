'use strict';
const  vendor = require("./vendor.service")
const validationSchema = require('../../utils/joi')
const constants = require('../../utils/constants')



exports.createVendor = async (req, res) => {
    try {
        let { email } = req.body
        const isEmailExist = await vendor.findOne(email);
        if (isEmailExist) {
          return res.status(constants.statuscodes.BAD_REQUEST).json({
            status: constants.statuscodes.BAD_REQUEST,
            message : constants.constants.USER_EXIST
          });
        }
        console.log(req.body.password)
        const validation = await validationSchema.vendorRegister(req.body)
        if (validation) {
          return res
              .status(constants.statuscodes.BAD_REQUEST)
              .json(validation.details);
      }
        else {
          const userdata = await vendor.create(req.body)
          res.status(constants.statuscodes.CREATED).json({status :constants.statuscodes.CREATED, userdata:userdata})
        }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: constants.messages.INTERNAL_SERVER_ERROR, status: constants.statuscodes.INTERNAL_SERVER_ERROR });
    }
  };


exports.authenticate = async (req, res) => {
  try {
    const { name, password } = req.body;
    const auth = await vendor.authenticate({
      name,
      password,
    });
    if (auth.message == constants.constants.INVALID_LOGIN) {
      return res.status(constants.statuscodes.BAD_REQUEST).send({
        message: constants.constants.LOGIN_FAILURE,
      });
    }
    return res.status(constants.statuscodes.SUCCESS).send({
      message: constants.constants.LOGIN_SUCCESS,
      data: auth,
    });
  } catch (error) {
    if (error.message === constants.constants.NOT_FOUND) {
      return res.status(constants.constants.NOT_FOUND).send({
        message: constants.constants.FETCH_FAILURE,
        data: null,
      });
    } else {
      res.status(500).send({ message: constants.messages.INTERNAL_SERVER_ERROR, status: constants.statuscodes.INTERNAL_SERVER_ERROR });
    }
  }
}


exports.forgotPassword = async (req, res) =>{
  try {
    const user = await vendor.forgotPassword(req.body.email);
    return res.status(constants.statuscodes.SUCCESS).send({
      message: constants.constants.EMAIL_SUCCESS,
    });
  } catch (error) {
    if (error.message === constants.messages.NOT_FOUND) {
      return HttpResponse.status(constants.statuscodes.NOT_FOUND).send({
        message: constants.statuscodes.NOT_FOUND,
        data: null,
      });
    } else {
      res.status(500).send({ message: constants.messages.INTERNAL_SERVER_ERROR, status: constants.statuscodes.INTERNAL_SERVER_ERROR });
    }
  }
}

