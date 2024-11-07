// config/nodemailerConfig.js
const { createTransport } = require("nodemailer");
const jwt = require('jsonwebtoken');

// Create and export the transporter
const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Generate JWT token for email verification
const emailTokenCreation = (id) => {
  return jwt.sign({id},process.env.JWT_KEY,{expiresIn:"1h"});
};

// Function to send verification email
const verifyEmailSent = async ({ username, email, id }) => {
  const token = emailTokenCreation(id);
  const verificationUrl = `${process.env.BASE_URL}/api/users/verify-email?token=${token}`;

  await transporter.sendMail({
    from: "test1user2024@gmail.com",
    to: email,
    subject: `Verify Email.`,
    html: `<p>Hello, ${username}!</p>
            <p>Please verify your email by clicking the link below:</p>
     <a href=${verificationUrl}>${verificationUrl}</a>`
  });
};


// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBjYjYyMjM3LTc0YjUtNDczNi04ZGFlLWM4NmUyYTgwMmVmZSIsImlhdCI6MTcyOTA0ODI2MywiZXhwIjoxNzI5MDUxODYzfQ.FZoMjMw6-HNUKI6GcQhvqicrxMznmhg9L8rwDj1u7To';  
// const verifyToken = jwt.verify(token,JWT_KEY);
// console.log(verifyToken);


module.exports = {verifyEmailSent};