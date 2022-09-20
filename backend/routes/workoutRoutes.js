const {
  createWorkout,
  getWorkouts,
  getOneWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const router = require("express").Router();

router.post("/", createWorkout);
router.get("/", getWorkouts);
router.get("/:id", getOneWorkout);
router.delete("/:id", deleteWorkout);
router.patch("/:id", updateWorkout);

module.exports = router;
