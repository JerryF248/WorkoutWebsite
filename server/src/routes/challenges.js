import express from "express";
import { ChallengeModel } from "../models/Challenges.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await ChallengeModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.post("/", async (req, res) => {
  const challenge = new ChallengeModel(req.body);
  try {
    const response = await challenge.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.post("/create", async (req, res) => {
  const { name, description, completed } = req.body;
  await ChallengeModel.insertMany([
    {
      name: name,
      description: description,
      completed: completed,
    },
  ]);
});

export { router as challengesRouter };