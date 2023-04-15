import express from "express";
import mongoose from "mongoose";
import { workoutModel } from "../models/Workouts.js";
import { userRouter } from "../routes/users.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await workoutModel.find({});
    res.json(response);
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
  const { title, sets, reps, level, equipment, targetMuscles } = req.body;
  //const exercise = await workoutModel.findOne({ title });

  const newExercise = new workoutModel({
    title,
    sets,
    reps,
    level,
    equipment,
    targetMuscles,
  });

  workoutModel.insertMany({ newExercise });
  await newExercise.save();
  console.log(res.body);
});

export { router as workoutsRouter };
