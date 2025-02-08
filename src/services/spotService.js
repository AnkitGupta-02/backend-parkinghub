const { Spot } = require("../models/spotSchema");

exports.createSpot = async (spotData) => {
  const spot = new Spot(spotData);
  await spot.save();
  return spot;
};

