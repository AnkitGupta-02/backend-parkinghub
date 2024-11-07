const pool = require("../config/db.js");

// Create a new parking spot
  exports.createSpot = async ({ id, name, lat, lng, address }) => {
   const [result] = await pool.query("INSERT INTO `parking_spots` (id, name, lat, lng, address) VALUES (?, ?, ?, ?, ?)", 
    [id, name, lat, lng, address]
  );
  return { success: true, result };
  };

  // Retrieve all parking spots
  exports.showSpots = async () => {
  const [rows] = await pool.query("SELECT id,name,lat,lng,address FROM parking_spots");
  return { success: true, data: rows };
  }

  // Update an existing parking spot
  exports.updateSpots = async (id,updatedData) => {
   const [result] = await pool.query("UPDATE `parking_spots` SET ? WHERE `id` = ?",[updatedData,id]);
   return { success: result.affectedRows > 0, result };
  };

  // Delete a parking spot by ID
  exports.deleteSpots = async (id) => {
   const [result] = await pool.query("DELETE FROM `parking_spots` WHERE `id` = ?",[id]);
   return { success: result.affectedRows > 0, result };
  }
