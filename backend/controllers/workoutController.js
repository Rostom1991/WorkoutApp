const workoutModel = require("../models/workoutModel");
const mongoose = require("mongoose");

//CREATE WORKOUT
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await workoutModel.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//GET WORKOUTS
const getWorkouts = async (req, res) => {
  const workout = await workoutModel.find({});
  try {
    if (workout) {
      res.status(200).json(workout);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//GET WORKOUT BY ID
const getOneWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID Not Valid" });
  }
  const workout = await workoutModel.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "Workout Not Found" });
  }
  res.status(200).json(workout);
};

// DELETE WORKOUT
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID Not Valid!" });
  }
  const workout = await workoutModel.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ error: "Workout Not Found" });
  }
  res.status(200).json(workout);
};

//UPDATE A WORKOUT
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "ID Not Valid" });
  }
  const workout = await workoutModel.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  if (!workout) {
    return res.status(404).json({ error: "Workout Not Found" });
  }
  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getWorkouts,
  getOneWorkout,
  deleteWorkout,
  updateWorkout,
};
