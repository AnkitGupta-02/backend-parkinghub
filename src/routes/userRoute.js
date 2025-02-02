const express = require('express');
const router = express.Router();

const {createUser,verifyEmail,loginUser} = require("../controllers/userController");
const hashPassword =  require('../middleware/hashPassword');
const emailVerification = require('../middleware/emailVerification');

router.post('/create',hashPassword,createUser);
router.post('/verify-email',emailVerification,verifyEmail);
router.post('/login',loginUser);

module.exports = router;
