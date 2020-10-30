const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  workout: {
    type: String,
    trim: true,
    required: "Workout Name Required"
  },
  distance: {
    type: Number,
    trim: true,
    required: "Distance Required",
    default: 1
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;