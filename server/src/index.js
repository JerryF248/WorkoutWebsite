import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { workoutsRouter } from "./routes/workouts.js";
import { challengesRouter } from "./routes/challenges.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/workouts", workoutsRouter);
app.use("/challenges", challengesRouter);

mongoose.connect(
  "mongodb+srv://TJK:Workout@489cluster.66qgkdl.mongodb.net/489Cluster?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log(`Server started`));
