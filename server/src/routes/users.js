import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";
import { workoutModel } from "../models/Workouts.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (user) {
    return res.json({ message: "User already exists!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();

  res.json({ message: "User Registered Succesfully!" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.json({ message: "User Does Not Exist!" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.json({ message: "Username or Password is Incorrect!" });
  }

  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
});

router.post("/create", async (req, res) => {
  const { title, sets, reps, level, equipment, targetMuscles } = req.body;
  //const exercise = await workoutModel.findOne({ title });
  await workoutModel.insertMany([
    {
      title: title,
      sets: sets,
      reps: reps,
      level: level,
      equipment: equipment,
      targetMuscles: targetMuscles,
    },
  ]);
});

export { router as userRouter };
