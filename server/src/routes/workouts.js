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
  res.send("Good");

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
