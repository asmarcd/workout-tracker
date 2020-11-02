const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Workout name is required"
    },
    type: {
        type: String,
        trim: true,
        required: "Workout type is required"
    },
    weight: {
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    duration: {
        type: Number
    },
    distance: {
        type: Number
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout