require("dotenv").config();
const { createTransport } = require("nodemailer");
const jwt = require("jsonwebtoken");

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

// Function to send verification email
const verifyEmailSent = async (user) => {
  const token = user.generateToken("1h");
  const verificationUrl = `${process.env.BASE_URL}/api/users/verify-email?token=${token}`;

  await transporter.sendMail({
    from: "test1user2024@gmail.com",
    to: user.email,
    subject: "Verify Your Email",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>Hello, ${user.name}!</h2>
        <p>Thank you for signing up! Please verify your email address by clicking the button below:</p>
        <p>
          <a href="${verificationUrl}" 
             style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; 
                    text-decoration: none; border-radius: 5px;">
                    ${verificationUrl}
          </a>
        </p>
        <p>If you didn't request this, please ignore this email.</p>
      </div>`,
  });
};

module.exports = { verifyEmailSent };
