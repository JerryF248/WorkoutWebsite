import mongoose from "mongoose";

const workoutSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  exercises: [String, Number, [Number]], // Exercise: title, sets, reps
  level: String,
  //imageUrl: String,
  equipment: [String],
  targetMuscles: [String],
});

const exerciseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  sets: { type: String, required: true },
  reps: { type: String, required: true },
  level: { type: String, required: true },
  equipment: { type: String, required: true },
  targetMuscles: { type: String, required: true },
});

/* const workoutPlanSchema = mongoose.Schema({
    title: String,
    goal: String,
    level: String,
    duration: String,           //days that the plan takes
    workoutTime: String,        
    equipment: [String],
    targetMuscle: String
    //workouts: workout schema?
}); */

export const workoutModel = mongoose.model("workout", exerciseSchema);
