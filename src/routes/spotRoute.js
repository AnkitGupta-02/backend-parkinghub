const express = require('express');
const router = express.Router();
const {createSpot, showSpots, updateSpots, deleteSpots} = require('../controllers/spot.controller.js');


// Retrieve all parking spots
router.get('/', showSpots);

// Create a new parking spot
router.post('/', createSpot);

// Update an existing parking spot by ID
router.put('/:id', updateSpots);

// Delete a parking spot by ID
router.delete('/:id', deleteSpots);

module.exports = router;