const express = require('express');
const router = express.Router();

const {createSpot,uploadImage} = require('../controllers/spotController');
const auth = require('../middleware/auth');
const uploadToCloudinary = require('../middleware/uploadToCloudinary');
const upload = require('../config/multerConfig');

router.post('/create',auth,createSpot);
router.post('/upload',upload.single('images'),uploadToCloudinary,uploadImage);


module.exports = router;