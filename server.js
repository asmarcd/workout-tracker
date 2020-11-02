const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Workout = require("./workoutModel");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

// Creates a new cardio workout when the user hits "Submit"
app.post("/submitCardio", ({body}, res) => {
  Workout.create({
    name: body.name,
    type: "Cardio",
    duration: body.duration,
    distance: body.distance
  }).then(newWorkout => {
    res.json(newWorkout);
  }).catch (err => {
    res.json(err);
  });
});

// Creates a new weights workout when the user hits "Submit"
app.post("/submitWeights", ({body}, res) => {
  Workout.create({
    name: body.name,
    type: "Weights",
    weight: body.weight,
    reps: body.reps,
    sets: body.sets
  }).then(newWorkout => {
    res.json(newWorkout);
  }).catch (err => {
    res.json(err);
  });
});

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });