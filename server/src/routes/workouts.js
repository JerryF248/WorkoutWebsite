import express from "express";
import mongoose from "mongoose";
import { workoutModel } from "../models/Workouts.js";
import { userRouter } from "../routes/users.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await workoutModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.get("/savedWorkouts/ids", async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    res.json({exercises: user.exercises});
  } catch (error) {
    res.json(error);
  }
});

router.get("/savedWorkouts", async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    const exercises = await workoutModel.find({
      _id: {$in: user.exercises},
    });
    res.json({exercises});

  } catch (error) {
    res.json(error);
  }
});

router.put("/", async (req, res) =>{
  try{
    const exercise = await workoutModel.findById(req.body.exerciseID);
    const user = await UserModel.findById(req.body.userID);
    user.exercises.push(exercise);
    await user.save();
    res.json({exercises: user.exercises});
  } catch (error) {
    res.json(error);
  }
});

router.post("/", async (req, res) => {
  const workout = new workoutModel(req.body);
  try {
    const response = await workout.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.post("/create", async (req, res) => {
  const { title, set, reps, level, equipment, targetMuscles } = req.body;
  // //const exercise = await workoutModel.findOne({ title });
  // console.log(req.body);
  const exercise = new workoutModel({
    title: title,
    set: set,
    reps: reps,
    level: level,
    equipment: equipment,
    targetMuscles: targetMuscles,
  });

  try {
    await workoutModel.insertMany([exercise]);
    await exercise.save();
  } catch (e) {
    console.log(e);
  }
});

export { router as workoutsRouter };
