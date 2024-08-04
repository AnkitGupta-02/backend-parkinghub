const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/userRoute");
// const placeRoute = require("./routes/placeRoute");

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);
// app.use("/api/places", placeRoute);

app.listen(8080);
