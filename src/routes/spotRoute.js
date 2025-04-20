const express = require('express');
const router = express.Router();

const {createSpot,uploadImage} = require('../controllers/spotController');
const auth = require('../middleware/auth');
const uploadToCloudinary = require('../middleware/uploadToCloudinary');
const getCoordinates = require('../middleware/getCoordinates');
const upload = require('../config/multerConfig');

router.post('/create',[auth,getCoordinates],createSpot);
router.post('/upload',upload.single('images'),[auth,uploadToCloudinary],uploadImage);




module.exports = router;