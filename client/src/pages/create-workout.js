import React, { useState } from "react";
import axios from "axios";
import App from "../App";
import { Navigate, useNavigate } from "react-router-dom";

export const CreateWorkout = () => {
  return (
    <div className="create-workout">
      <Create />
    </div>
  );
};

const Create = (props) => {
  const [title, setTitle] = useState("");
  const [set, SetSets] = useState("");
  const [reps, setReps] = useState("");
  const [level, setLevel] = useState("");
  const [equipment, setEquipment] = useState("");
  const [targetMuscles, setTargetMuscles] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/workouts/create", {
        title,
        set,
        reps,
        level,
        equipment,
        targetMuscles,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <h1>Workout Builder/Generator</h1>
      <br></br>
      <p>
        This workout builder lets you generate or build a workout plan tailored
        to your (or your clients*) goals, preferences, schedule, and available
        equipment. Just fill out the settings and then pick a workout routine
        from the "Pick a Routine" tab. Whether you're a beginner or advanced,
        looking to build muscle or burn fat, the workout builder will match you
        with the right plan and then create workouts each week that are
        personalized to your strength level, goals, and performance over time.
      </p>
      <br></br>

      <div className="form">
        <form onSubmit={submit}>
          <label htmlFor="title" style={{ alignItems: "center" }}>
            Title
          </label>
          <input
            id="title"
            type="text"
            value={props.title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
          <br></br>
          <br></br>
          <label htmlFor="set">Sets</label>
          <select
            type="text"
            id="set"
            value={set}
            onChange={(e) => {
              SetSets(e.target.value);
            }}
            style={{ width: "440px", height: "40px", color: "red" }}
            required
          >
            <option style={{ width: "150px" }}>
              --Please choose an option--
            </option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
            <option>60</option>
            <option>70</option>
            <option>80</option>
            <option>90</option>
          </select>
          <br></br>
          <br></br>
          <label htmlFor="reps">Reps </label>
          <input
            id="reps"
            type="text"
            value={reps}
            onChange={(e) => {
              setReps(e.target.value);
            }}
            required
          />
          <br></br>
          <br></br>
          <label htmlFor="level">Level </label>
          <input
            id="level"
            type="text"
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
            }}
            required
          />
          <br></br>
          <br></br>
          <label htmlFor="equipment">setEquipment </label>
          <input
            id="equipment"
            type="text"
            value={equipment}
            style={{ marginLeft: "180px" }}
            onChange={(e) => {
              setEquipment(e.target.value);
            }}
            required
          />
          <br></br>
          <br></br>
          <label htmlFor="targetMuscles">targetMuscle </label>
          <input
            id="targetMuscles"
            type="text"
            style={{ marginLeft: "185px" }}
            value={targetMuscles}
            onChange={(e) => {
              setTargetMuscles(e.target.value);
            }}
            required
          />
          <br></br>
          <button
            onChange={(e) => {
              submit(e);
            }}
            onClick={() => {
              alert("Workout Builder Created...");
            }}
          >
            Create Now
          </button>
        </form>
      </div>
    </>
  );
};
