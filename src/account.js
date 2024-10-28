// config/nodemailerConfig.js
const { createTransport } = require("nodemailer");
const jwt = require('jsonwebtoken');

// Create and export the transporter
const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "test1user2024@gmail.com",
    pass: "hcvs nzza hbau etqa",
  },
});

const verifyEmailSent = async ({ username, email, id }) => {
  await transporter.sendMail({
    from: "test1user2024@gmail.com",
    to: email,
    subject: `Verify Email.`,
    html: `<p>${username} </p>
     <a href=http://localhost:8000/api/users/verify-email?token=${emailTokenCreation({id})}>http://localhost:8000/api/users/verify-email?token=${emailTokenCreation({id})}</a>`
  });
};

const emailTokenCreation = ({id}) => {
    const result = jwt.sign({id},process.env.JWT_KEY,{expiresIn:"1h"});
   return(result);
}
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBjYjYyMjM3LTc0YjUtNDczNi04ZGFlLWM4NmUyYTgwMmVmZSIsImlhdCI6MTcyOTA0ODI2MywiZXhwIjoxNzI5MDUxODYzfQ.FZoMjMw6-HNUKI6GcQhvqicrxMznmhg9L8rwDj1u7To';  
// const verifyToken = jwt.verify(token,JWT_KEY);
// console.log(verifyToken);


module.exports = {verifyEmailSent};