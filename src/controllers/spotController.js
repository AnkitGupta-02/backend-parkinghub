const {
  createSpot,
} = require("../services/spotService");

exports.createSpot = async (req, res) => {
  req.body.ownerId = req.user._id;
  const spotData = req.body;
  console.log(spotData);
  
  if (!spotData) return res.status(400).send("req.body cannot be empty");

  const newSpot = await createSpot(spotData);

  if (!newSpot) return res.status(400).send("spot creation failed");

  res.status(201).send("created sucessfully");
};

exports.uploadImage = async (req,res) => {
  const url = req.body.url;
  res.status(200).send(url);
}
