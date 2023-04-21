import mongoose from "mongoose";

const ChallengeSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    completed: {type: Boolean, required: true}
});

export const ChallengeModel = mongoose.model("challenges", ChallengeSchema);