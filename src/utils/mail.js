const nodemailer =  require('nodemailer');

  async function notifyForgotPassword(data) {
    try {
        const email = data.email;
        const otp = data.otp;
        const name = data.name;
        const html = `<body>
                <h1>Reset Your Password</h1>
                <p>Hello ${name},</p>
                <p>We received a request to reset your password.Use the below OTP</p>
                <strong>You have 24 hrs to reset your password<p>
                <strong >OTP : ${otp}</strong>
                <p>If you didn't request this, you can safely ignore this email.</p>
                <p>Best regards,<br>Your App Team</p>
            </body>`;
        const subject = 'Forgot Password';
        console.log(html)
        const e = await sendEmail({ email, otp, name, html, subject });
        return e;
    }
    catch(e){
        throw e;
    }
  }

  async function sendEmail(data) {
    try{
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false,
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASSWORD,
            },
          });
        return await transporter.sendMail({
          from: data.email,
          to: data.email,
          subject: data.subject,
          html: data.html,
        });
    }
   catch(e){
    throw e;
   }
  }


module.exports = {
    sendEmail, notifyForgotPassword
}
