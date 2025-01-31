require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Base Route");
});

app.listen(process.env.PORT, () =>
  console.log(`Server is listning on ${PORT}`)
);

module.exports = app;
