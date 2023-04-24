import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { CreateWorkout } from "./pages/create-workout";
import { SavedWorkouts } from "./pages/saved-workouts";
import { Auth } from "./pages/auth";
import { Challenges } from "./pages/challenges";
import { FitnessGoals } from "./pages/fitness-goals";
import { MyWorkouts } from "./pages/my-workouts";
import { NavBar } from "./components/navbar";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [set, SetSets] = useState("");
  const [reps, setReps] = useState("");
  const [level, setLevel] = useState("");
  const [equipment, setEquipment] = useState("");
  const [targetMuscles, setTargetMuscles] = useState("");
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-workout" element={<CreateWorkout />} />
          <Route path="/saved-workouts" element={<SavedWorkouts />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/fitness-goals" element={<FitnessGoals />} />
          <Route path="/my-workouts" element={<MyWorkouts />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
