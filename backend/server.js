const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const workoutRoutes = require("./routes/workoutRoutes");

//Creating the Server
const app = express();
const port = process.env.PORT;
const mongo = process.env.MONGO;

//middleware
app.use(express.json());
app.use("/workouts", workoutRoutes);

//Connect to Database
mongoose
  .connect(mongo)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log("Unable to connect to DB", error));

app.listen(port, () => {
  console.log("Server is Running!");
});
