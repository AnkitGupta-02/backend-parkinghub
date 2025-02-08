require("dotenv").config();
const axios = require("axios");
const { BadRequest } = require("http-errors");

async function getCoordinates(req, res, next) {
  const { address } = req.body;
  if (!address) return res.status(400).send("address must have some value");
  const response = await axios.get(
    `${process.env.GEOCODING_URL}?q=${encodeURIComponent(address)}&key=${
      process.env.GEOCODING_API_KEY
    }`
  );

  if (response.data.results.length === 0) {
    throw BadRequest("No location found for the given address.");
  }

  const location = response.data.results[0].geometry;

  req.body.location = {
    type: "point",
    coordinates: [location.lat, location.lng],
  };
  next();
}

module.exports = getCoordinates;
