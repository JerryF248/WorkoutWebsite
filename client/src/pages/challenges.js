import React, { useEffect, useState } from "react";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
import swal from 'sweetalert';


export const Challenges = () => {
  return (
    <div classname="">
      <Create />
    </div>
  );
};

const Create = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);
    const [challenges, setChallenge] = useState([]);
  
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

    async function submit2(e) {
      e.preventDefault();
      try {
        await axios.put("http://localhost:3001/challenges/update", {
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

    useEffect(() => {
      fetch("http://localhost:3001/challenges")
        .then((res) => {
          return res.json();
        })
        .then((challenge) => {
          console.log(challenge);
          setChallenge([...challenge]);
        });
    }, []);

    return (
            <div className="challenges-container">
            <div className="challenges">
                <h1>Challenges</h1>
                <h3><i>CHALLENGES THAT PUT YOUR FITNESS TO THE TEST</i></h3>
                <br></br><br></br>
                <h4>Users may complete either a premade challenge from the list below or add your own personal challenge.</h4>
                <br></br><br></br>
                <table className="table table-hover table-dark" style={{borderStyle: 'solid', borderColor:'grey'}}>
                  <tbody>
                    {challenges &&
                    challenges.map((challenge) => (
                        <tr className="table-secondary">
                            <th>{challenge.name}</th>
                            <td>{challenge.description}</td>
                            <td>
                              <form onSubmit={submit2}>
                              {
                                    challenge.completed ? <button disabled type="submit" class="btn btn-outline-success">Completed</button> : <button type="submit" class="btn btn-outline-danger" onClick={()=>{swal("Success", "Challenge Completed!", "success"); setTimeout(() => window.location.reload(), 800)}}>Not Completed</button>
                              }
                              </form>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <form className="create-challenge" onSubmit={submit}>
                    <h3 style={{color: "white"}}>Create a Personal Challenge</h3>
                    <br></br>
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" value={props.name} placeholder="Challenge Name" onChange={(e) => { setName(e.target.value)} } required/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="description" value={props.description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Challenge Description" required/>
                    </div>
                    <button type="submit" className="btn btn-light" value={true} onClick={(e)=>{setCompleted(e.target.value); setTimeout(() => window.location.reload(), 800);}}>Create</button>
                </form>
            </div>
        </div>
    );
};
