const express = require("express");
const { PORT } = require("./config/serverConfig");
const cors = require("cors");
const app = express();

const userRoute = require("./routes/userRoute.js");
const spotRoute = require("./routes/spotRoute.js");

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/spots", spotRoute);

app.listen(PORT, () => {
  console.log(`Server is listning on ${PORT}`);
});
