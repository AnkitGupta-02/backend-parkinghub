const pool = require("../config/db.js");

  exports.createSpot = async ({ id, name, lat, lng, address }) => {
   await pool.query("INSERT INTO `parking_spots` (id, name, lat, lng, address) VALUES (?, ?, ?, ?, ?)", 
    [id, name, lat, lng, address]
  );
  };

  exports.showSpots = async () => {
  const [rows] = await pool.query("SELECT id,name,lat,lng,address FROM parking_spots");
  return rows;
  }

  exports.updateSpots = async (id,updatedData) => {
   const [result] = await pool.query("UPDATE `parking_spots` SET ? WHERE `id` = ?",[updatedData,id]);
    return result;
  };

  exports.deleteSpots = async (id) => {
   const [result] = await pool.query("DELETE FROM `parking_spots` WHERE `id` = ?",[id]);
   console.log(result);
  }
