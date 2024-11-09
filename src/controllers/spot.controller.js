const { createSpot, showSpots, updateSpots, deleteSpots } = require("../services/spotService");
const { v4: uuidv4 } = require("uuid");

// Create a new parking spot
exports.createSpot = async (req, res) => {
  const id = uuidv4();
  req.body.id = id;
  const spotData = req.body;


 // Basic validation for required fields
 if (!spotData.name || !spotData.lat || !spotData.lng) {
  return res.status(400).json({ success: false, message: "Missing required fields: name, lat, or lng." });
}


  await createSpot(spotData);
  res.status(201).json({ success: true, message: "Parking spot created successfully", id });
};

// Retrieve all parking spots
exports.showSpots = async (req,res)=>{
  const data = await showSpots();
  res.status(200).send({ success: true, data });
}

// Update an existing parking spot
exports.updateSpots = async (req,res) => {

const {id} = req.params;
const updatedData = req.body;

const result = await updateSpots(id,updatedData);
if (result.affectedRows === 0) {
  return res.status(404).json({ success: false, message: "Parking spot not found" });
}
res.status(200).json({ success: true, message: "Parking spot updated successfully" });
}

// Delete a parking spot by ID
exports.deleteSpots = async (req,res) => {
  const {id} = req.params;
  const result = await deleteSpots(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: "Parking spot not found" });
    }
    res.status(200).json({ success: true, message: "Parking spot deleted successfully" });
}
