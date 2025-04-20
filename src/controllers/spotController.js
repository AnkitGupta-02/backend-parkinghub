const {
  createSpot,
} = require("../services/spotService");

exports.createSpot = async (req, res) => {
  req.body.ownerId = req.user._id;
  
  console.log(req.body.ownerId);
  console.log(req.body.spotName);
  console.log(req.body.address);
  console.log(req.body.spotType);
  console.log(req.body.images);
  console.log(req.body.location);
  
  // if (!spotData) return res.status(400).send("req.body cannot be empty");

  // const newSpot = await createSpot(spotData);

  // if (!newSpot) return res.status(400).send("spot creation failed");

  // res.status(201).send("created sucessfully");
};

exports.uploadImage = async (req,res) => {
  const url = req.body.url;
  res.status(200).send(url);
}
