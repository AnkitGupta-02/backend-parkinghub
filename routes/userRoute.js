const express = require("express");
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controller/user.controller");
const route = express.Router();

route.get("/", getAllUser);

route.get("/:id", getUserById);

route.post("/", createUser);

route.post("/login", loginUser);

route.put("/:id", updateUser);

route.delete("/:id", deleteUser);

module.exports = route;
