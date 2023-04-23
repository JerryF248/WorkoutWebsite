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
  const challenge = new ChallengeModel({
    name: name,
      description: description,
      completed: completed,
  });

  try {
    await ChallengeModel.insertMany([challenge])
    await challenge.save()
  } 
  catch (error) {
    console.log(error)
  }
});

// for update
router.put("/update/:id", function (req, res) {
  ChallengeModel.findById(req.params.id)
  .then(challenge => {
    challenge.completed = true;

    challenge.save()
    .then(()=>res.json("UPDATED"))
    .catch((err)=>res.status(400).json(`Error: ${err}`));
  })
  .catch(err => res.status(400).json(`Error: ${err}`))
});

export { router as challengesRouter };