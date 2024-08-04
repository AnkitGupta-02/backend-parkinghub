const { getAllPlaces, createPlace } = require("../Services/placeServices");

exports.getAllPlaces = async (req, res) => {
  try {
    const places = await getAllPlaces();
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.createPlace = async (req, res) => {
  try {
    console.log(req.body);
    const place = await createPlace(req.body);
    res.status(201).json(place);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
