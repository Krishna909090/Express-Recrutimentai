const Vendor = require('./vendor.schema');
const hash = require("../../utils/bcrypt")
const mail = require("../../utils/mail")
const mailSchema = require('../../schema/mail.schema')
const { InternalServerError } = require('http-errors');
const { constants } = require('../../utils/constants');
const jwtService = require("../../utils/auth")


async function create(data){
    try{
      data.password = hash.hashingPassword(data.password)
      console.log(data.password, "dasdsabdh")
      const vendor = await Vendor.create(data);
      return vendor
    }
    catch (error) {
        console.error('Error while creating user:', error);
        throw new InternalServerError();
    }
}

async function findOne(data) {
    try {
      const isEmail = data.includes('@');
      const query = isEmail ? { email: data } : { name: data };
      const user = await Vendor.findOne(query);
      if(!user){
        return {message : constants.constants.NOT_FOUND}
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  async function authenticate(data) {
    try {
      const user = await findOne(data.name);
      console.log(user)
      if (!user) {
        return { message: constants.INVALID_LOGIN };
      }
      const isMatch = await hash.checkValidPassword(
        data.password,
        user.password,
      );
      if (!isMatch) {
        return { message: constants.INVALID_LOGIN };
      }
      const token =  jwtService.jwtGenerateToken({ payload: user.name });
      return { user, token };
    } catch (error) {
      throw error;
    }
  }

  async function forgotPassword(data) {
    try {
      const user = await findOne(data);
      if (!user) {
        return {message : constants.constants.NOT_FOUND}
      }
      console.log(user, "asdabsajkd")
      const otp = Math.floor(Math.random() * 899999 + 100000);
      await mailSchema.create({ email: user.email, otp: otp });
      return await mail.notifyForgotPassword({
        email: user.email,
        name: user.name,
        otp: otp,
      });
    } catch (error) {
      throw error;
    }
  }

  async function findAll(){
    return Vendor.find().exec();
  }



module.exports = {
    create,
    findAll,
    findOne,
    authenticate,
    forgotPassword
}