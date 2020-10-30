const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeightsSchema = new Schema({
  workout: {
    type: String,
    trim: true,
    required: "Workout Name Required"
  },
  reps: {
    type: Number,
    trim: true,
    required: "Number of Reps Required",
    default: 1
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Weights = mongoose.model("Weights", WeightsSchema);

module.exports = Weights;