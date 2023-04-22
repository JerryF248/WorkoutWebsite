import React, { useEffect, useState, state } from "react";
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
  const [data2, setData] = useState([]);

  state = {
    posts: [],
  };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/workouts")
  //     .then((rep) => {
  //       console.log("Data has been received!");
  //       const data = rep.data;
  //       this.setState({ posts: data });
  //       setData(...data);
  //       console.log(data2);
  //     })
  //     .catch(() => {
  //       //alert("Error retrieving data!!!");
  //     });
  // }, []);

  useEffect(() => {
    fetch("http://localhost:3001/workouts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData([...data]);
      });
  }, []);

  function displayAllData() {
    return data2.map((post, index) => (
      <div key={index}>
        <h1>{post.title}</h1>
        <h1>{post.set}</h1>
        <h1>{post.reps}</h1>
      </div>
    ));
  }

  return (
    <>
      <div className="create-workout">
        <div>
          {data2 &&
            data2.map((data, index) => (
              <h3>
                <th scope="col"></th>
                Saved Workout's Program Number: {index + 1}
                <br></br>
                Title:{data.title}
                <br></br>
                Set: {data.set}
                <br></br>
                Reps: {data.reps}
                <br></br>
                Level: {data.level}
                <br></br>
                Equipment: {data.equipment}
                <br></br>
                targetMuscle: {data.targetMuscles}
              </h3>
            ))}
        </div>
      </div>
    </>
  );
};
