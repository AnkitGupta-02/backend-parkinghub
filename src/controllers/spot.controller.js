const { createSpot, showSpots, updateSpots, deleteSpots } = require("../services/spotService");
const { v4: uuidV4 } = require("uuid");

exports.createSpot = async (req, res) => {
  const id = uuidV4();
  req.body.id = id;
  const spotData = req.body;
  console.log(spotData);
  await createSpot(spotData);
  res.status(201).send();
};

exports.showSpots = async (req,res)=>{
  const data = await showSpots();
  res.send(data);
}

exports.updateSpots = async (req,res) => {
const {id} = req.params;
const updatedData = req.body;
await updateSpots(id,updatedData);
res.status(200).send();

}

exports.deleteSpots = async (req,res) => {
  const {id} = req.params;
  await deleteSpots(id);
  res.status(200).send();
}
