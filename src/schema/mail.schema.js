const  mongoose =  require('mongoose');


const forgotPasswordSchema = new mongoose.Schema({
    email: String,
  otp: Number,
  created_at: {
    type: Date,
    default: Date.now,
  },
  created_by: String,
  modified_at: {
    type: Date,
    default: Date.now,
  },
  modified_by: String,
});

const forgotPassword = mongoose.model('forgotpassword', forgotPasswordSchema);

module.exports = forgotPassword;