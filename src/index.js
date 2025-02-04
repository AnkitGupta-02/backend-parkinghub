require("express-async-errors");
require("dotenv").config();

const express = require("express");
const winston = require("winston");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("./database/db.js");
require("winston-mongodb");
const userRoute = require("./routes/userRoute.js");
const error = require("./middleware/error.js");

const app = express();

process.on("uncaughtException", (ex) => {
  winston.error(ex.message, ex);
  process.exit(1);
});

winston.exceptions.handle(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.prettyPrint()
    ),
  }),
  new winston.transports.File({ filename: "uncaughtException.log" })
);

process.on("unhandledRejection", (ex) => {
  throw ex;
});

winston.add(new winston.transports.File({ filename: "logfile.log" }));
winston.add(new winston.transports.MongoDB({ db: process.env.DB_URL }));

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/api/users", userRoute);

app.use(error);

app.listen(process.env.PORT, () => console.log("listning at 8080"));

module.exports = app;
