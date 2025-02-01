require("express-async-errors");
require("dotenv").config();
require("./database/db.js");
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoute = require('./routes/userRoute.js');

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use('/api/users',userRoute);

app.listen(process.env.PORT, () => console.log("listning at 8080"));

module.exports = app;
