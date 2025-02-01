const express = require('express');
const router = express.Router();

const {createUser} = require("../controllers/userController");
const hashPassword =  require('../middleware/hashPassword');

router.post('/create',hashPassword,createUser);

module.exports = router;
