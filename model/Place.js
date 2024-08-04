const { DataTypes } = require("sequelize");
const sequelize = require("../db/database");

const Place = sequelize.define("place", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lat: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  lon: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

sequelize.sync({ alter: true });
module.exports = Place;
