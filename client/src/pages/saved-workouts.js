import React, { useEffect, useState } from "react";
import axios from "axios";
import App from "../App";

export const SavedWorkouts = (props) => {
  console.log(props.title);
  return (
    <div className="create-workout">
      <Create />
    </div>
  );
};

const Create = () => {
  const [title, setTitle] = useState("");
  const [set, SetSets] = useState("");
  const [reps, setReps] = useState("");
  const [level, setLevel] = useState("");
  const [equipment, setEquipment] = useState("");
  const [targetMuscles, setTargetMuscles] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/workouts/create")
      .then((rep) => {
        console.log("Data has been received!");
        const data = rep.data;
        console.log(data);
      })
      .catch(() => {
        //alert("Error retrieving data!!!");
      });
  }, []);

  return <></>;
};
