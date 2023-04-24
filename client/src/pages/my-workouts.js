import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "../App";
import { Navigate, useNavigate } from "react-router-dom";

export const MyWorkouts = () => {
  const navigate = useNavigate();
  return (
    <div className="create-workout">
      <MyCreate />
    </div>
  );
};

const MyCreate = (props) => {
  const navigate = useNavigate();
  const [username, Setusername] = useState("");
  const [title, setTitle] = useState("");
  const [set, SetSets] = useState("");
  const [reps, setReps] = useState("");
  const [level, setLevel] = useState("");
  const [equipment, setEquipment] = useState("");
  const [targetMuscles, setTargetMuscles] = useState("");
  const [data2, setData] = useState([]);

  async function submit(e) {
    e.preventDefault();
    try {
      const workout = await axios.post("http://localhost:3001/workouts", {
        username,
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
    try {
      await axios.put("http://localhost:3001/workouts", {});
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetch("http://localhost:3001/workouts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData([...data]);
        if (data.length > 0) {
          var temp = "";

          data.forEach((u, index) => {
            index++;

            if (!u.username) {
              u.username = index;
            }
            //if (username === "") username = "Unknown";
            temp += "<tr>";
            //temp += "<td> </td>";
            temp += "<td>" + u.username + "</td>";
            temp += "<td>" + u.title + "</td>";
            temp += "<td>" + u.set + "</td>";
            temp += "<td>" + u.reps + "</td>";
            temp += "<td>" + u.level + "</td>";
            temp += "<td>" + u.equipment + "</td>";
            temp += "<td>" + u.targetMuscles + "</td>";
            temp += "</tr>";
          });

          document.getElementById("data").innerHTML = temp;
        }
      });
  }, []);
  return (
    <>
      <h1 style={{ color: "whitesmoke", fontFamily: "monospace" }}>
        {username} Workout Builder/Generator
      </h1>
      <br></br>
      <br></br>

      <div className="form2">
        <form onSubmit={submit}>
          <label
            htmlFor="username"
            style={{
              alignItems: "center",
              color: "whitesmoke",
              paddingLeft: "150px",
            }}
          >
            Username:
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => {
              Setusername(e.target.value);
            }}
            required
          />
          <br></br>
          <br></br>
          <label
            htmlFor="title"
            style={{
              alignItems: "center",
              color: "whitesmoke",
              paddingLeft: "200px",
            }}
          >
            Title{" "}
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
          <label
            htmlFor="set"
            style={{
              alignItems: "center",
              color: "whitesmoke",
              paddingLeft: "200px",
            }}
          >
            Sets{" "}
          </label>
          <select
            type="text"
            id="set"
            value={set}
            onChange={(e) => {
              SetSets(e.target.value);
            }}
            style={{
              width: "440px",
              height: "40px",
              color: "blue",
            }}
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
          <label
            htmlFor="reps"
            style={{ color: "whitesmoke", paddingLeft: "200px" }}
          >
            Reps:
          </label>
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
          <label
            htmlFor="level"
            style={{ color: "whitesmoke", paddingLeft: "200px" }}
          >
            Level{" "}
          </label>
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
          <label
            htmlFor="equipment"
            style={{ color: "whitesmoke", marginLeft: "130px" }}
          >
            SetEquipment{" "}
          </label>
          <input
            id="equipment"
            type="text"
            value={equipment}
            onChange={(e) => {
              setEquipment(e.target.value);
            }}
            required
          />
          <br></br>
          <br></br>
          <label
            htmlFor="targetMuscles"
            style={{ color: "whitesmoke", marginLeft: "130px" }}
          >
            TargetMuscle{" "}
          </label>
          <input
            id="targetMuscles"
            type="text"
            value={targetMuscles}
            onChange={(e) => {
              setTargetMuscles(e.target.value);
            }}
            required
          />
          <br></br>
          <br></br>
          <button
            class="btn btn-success btn-lg btn-block "
            style={{ marginLeft: "270px" }}
            onChange={(e) => {
              submit(e);
            }}
            onClick={() => {
              alert("Succesfully Create Workout Builder");

              window.location.href = "http://localhost:3000/my-workouts";
            }}
          >
            Create Now
          </button>
        </form>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h1 style={{ color: "whitesmoke", fontFamily: "monospace" }}>
        Welcome {username} Builder Lists
      </h1>
      <div class="container">
        <table class="table table-striped table-dark">
          <thead class="thead-light">
            <tr>
              <th scope="col">UserName</th>
              <th scope="col">Title</th>
              <th scope="col">Sets</th>
              <th scope="col">Reps</th>
              <th scope="col">Level</th>
              <th scope="col">Equipment</th>
              <th scope="col">TargetMuscle</th>
            </tr>
          </thead>
          <tbody id="data"></tbody>
        </table>
      </div>
    </>
  );
};
