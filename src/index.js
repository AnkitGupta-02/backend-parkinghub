const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const pool = require('./config/db.js')
// Import routes
const userRoute = require("./routes/userRoute.js");
const spotRoute = require("./routes/spotRoute.js");

// Middleware setup
app.use(express.json());
app.use(cors());

// Route handling
app.get("/", (req, res) => res.send("Home Page"));
app.use("/api/users", userRoute);
app.use("/api/spots", spotRoute);


// 404 handler for unmatched routes
app.use((req, res, next) => {
  res.status(404).send({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error details
  res.status(500).send({ error: "Internal Server Error" });
});

// Server initialization
console.log("db was connected :",pool.pool.config.connectionConfig.user);
app.listen(PORT, () => {
  console.log(`Server is listning on ${PORT}`);
});

module.exports = app;
