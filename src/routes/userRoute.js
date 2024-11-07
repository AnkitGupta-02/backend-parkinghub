const express = require("express");
const router = express.Router();
const { createUser, emailVerify, login,userAuthInfo,userLogout } = require("../controllers/user.controller.js");
const { hashPassword, sendVerificationEmail, authenticate} = require("../middleware/Auth.js");

// Register a new user (create user with password hashing and verification email sent)
router.post("/register",[hashPassword, sendVerificationEmail] ,createUser);

// Email verification endpoint
router.get('/verify-email', emailVerify);

// Login route
router.post('/login', login);

// Protected route for authenticated users
router.get('/profile',authenticate,userAuthInfo);

// Logout route to clear authentication cookie
router.post('/logout', userLogout);

module.exports = router;