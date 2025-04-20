require("dotenv").config();
const axios = require("axios");

async function getCoordinates(req, res, next) {
  const { address } = req.body;

  if (!address || address.trim() === "")
    return res.status(400).send("address must have some value");
// not exact value
  // const response = await axios.get(
  //   `https://nominatim.openstreetmap.org/search`,
  //   {
  //     params: {
  //       q: address,
  //       format: "json",
  //       limit: 1,
  //     },
  //     headers: {
  //       "User-Agent": `${process.env.APP_NAME}/1.0 (${process.env.EMAIL_USER})`,
  //     },
  //   }
  // );
  // if (response.data.length === 0)
  //   return res.status(400).send("coordinate not found");
  // const location = response.data[0];
  
  // accurate value with limit 2500 request only trials
  const response = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json`,
    {
      params: {
        q: address,
        key: process.env.OPENCAGE_API_KEY,
        limit: 1,
      },
    }
  );

  if (!response.data.results.length > 0)
    return res.status(400).send("coordinate not found");

  const location = response.data.results[0].geometry;

  req.body.location = {
    type: "point",
    coordinates: [location.lat, location.lng],
  };
  next();
}

module.exports = getCoordinates;
