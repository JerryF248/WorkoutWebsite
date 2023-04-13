import mongoose from "mongoose";

const workoutSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    exercises: [String, Number, [Number]], // Exercise: title, sets, reps
    level: String,
    //imageUrl: String,        
    equipment: [String],
    targetMuscles: [String]
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

export const workoutModel = mongoose.model('workout', workoutSchema)