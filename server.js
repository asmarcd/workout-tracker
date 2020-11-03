const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

const Workout = require("./workoutModel");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

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
    res.status(400).json(err);
  });
});

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });