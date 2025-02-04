const express = require('express');
const router = express.Router();

const {createUser,verifyEmail,loginUser,getUser,updateUser,logout} = require("../controllers/userController");
const hashPassword =  require('../middleware/hashPassword');
const emailVerification = require('../middleware/emailVerification');
const auth = require('../middleware/auth');

router.post('/create',hashPassword,createUser);
router.post('/verify-email',emailVerification,verifyEmail);
router.post('/login',loginUser);
router.get('/profile',auth,getUser);
router.post('/update',[hashPassword,auth],updateUser);
router.post('/logout',logout);

module.exports = router;
