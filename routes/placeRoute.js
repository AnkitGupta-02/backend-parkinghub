const express = require("express");
const { getAllPlaces, createPlace } = require("../controller/place.controller");

const route = express.Router();

route.get("/", getAllPlaces);
route.post("/", createPlace);

module.exports = route;
