const Place = require("../model/User");

exports.getAllPlaces = async () => {
  const places = await Place.findAll();
  return places;
};

exports.createPlace = async (data) => {
  const places = await Place.create(data);
  return places;
};
