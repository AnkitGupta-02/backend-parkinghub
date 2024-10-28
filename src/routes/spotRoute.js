const express = require('express');
const router = express.Router();
const {createSpot, showSpots, updateSpots, deleteSpots} = require('../controllers/spot.controller.js');


router.get('/',showSpots);
// create parking spot
router.post('/',createSpot);
router.put('/:id',updateSpots);
router.delete('/:id',deleteSpots);


module.exports = router;