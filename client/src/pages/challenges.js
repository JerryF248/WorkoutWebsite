import React, { useState } from "react";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

export const Challenges = () =>{
    return (
    <div classname=""> 
        <Create />
    </div>
    );
};

const Create = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState("");
  
    async function submit(e) {
      e.preventDefault();
      try {
        await axios.post("http://localhost:3001/challenges/create", {
          name,
          description,
          completed,
        });
        alert("Create Challenge Builder");
      }
      catch (error) {
        console.log(error);
      }
    }

    return (
            <div className="challenges-container">
            <div className="challenges">
                <h1>Challenges</h1>
                <h3><i>CHALLENGES THAT PUT YOUR FITNESS TO THE TEST</i></h3>
                <br></br><br></br><br></br>
                <h4>Logged in users may complete either a premade challenge or create a <mark className="yellow">personal challenge</mark> from the list below.</h4>
                <br></br><br></br>
                <table className="table table-hover table-dark">
                    <tbody>
                        <tr className="table-secondary">
                            <th>Bench Your Own Body Weight</th>
                            <td>Bench press your body weight for one full rep.</td>
                            <td>Not Completed</td>
                        </tr>
                        <tr className="table-warning">
                            <th>My 1 Month Cardio Challenge</th>
                            <td>Participate in an average-intesity cardio-related excersize every day of a month.</td>
                            <td>Completed</td>
                        </tr>
                    </tbody>
                </table>
                <form className="create-challenge" onSubmit={submit}>
                    <h3 style={{color: "white"}}>Create a Personal Challenge</h3>
                    <br></br>
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" value={name} placeholder="Challenge Name" onChange={(e) => { setName(e.target.value)} }/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Challenge Description"/>
                    </div>
                    <button type="submit" className="btn btn-light" value={false} onClick={(e)=>{setCompleted(e.target.value)}}>Create</button>
                </form>
            </div>
        </div>
    );
};