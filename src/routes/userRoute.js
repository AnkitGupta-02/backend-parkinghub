const express = require("express");
const router = express.Router();
const { createUser, emailVerify, login,userAuthInfo,userLogout } = require("../controllers/user.controller.js");
const { hashPassword, verifyEmailSent, authenticate} = require("../middleware/Auth.js");

// Create User
router.post("/",hashPassword, verifyEmailSent ,createUser);
router.post('/verify-email', emailVerify);
router.post('/login', login);
router.get('/',authenticate,userAuthInfo);
router.post('/logout', userLogout);



module.exports = router;
