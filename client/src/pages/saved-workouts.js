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
        if (data.length > 0) {
          var temp = "";

          data.forEach((u, index) => {
            index++;
            temp += "<tr>";
            temp += `<td><button onClick = "{()=> saveWorkout(`+ u.title +`)}"> Save ${index} </button> </td>`;
            temp += "<td>" + u.title + "</td>";
            temp += "<td>" + u.set + "</td>";
            temp += "<td>" + u.reps + "</td>";
            temp += "<td>" + u.level + "</td>";
            temp += "<td>" + u.equipment + "</td>";
            temp += "<td>" + u.targetMuscles + "</td>";
            temp += "</tr>"
          });

          document.getElementById("data").innerHTML = temp;
        }
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
      <div class="container">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Number</th>
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

        {/* <div>
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
            ))} */}
        {/* </div> */}
      </div>
    </>
  );
};
