import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["access_token"]);
  return (
    <div class="text">
      <h1 style={{ color: "Red" }}>FITNESS CLUB.</h1>
      <p style={{ color: "whitesmoke" }}>
        If you want something you've never had, you must be willing to do
        something you've never done
      </p>
      {!cookies.access_token && (<button onClick={() => {{navigate("/auth");}}}> Join Now</button>)}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="row">
        <div class="card" style={{ color: "gray" }}>
          <h2>Progression</h2>
          <p>
            Monitor your progess with challenges.
          </p>
        </div>
        <div class="card" style={{ color: "gray" }}>
          <h2>Workout</h2>
          <p>
            Create custom workouts to fit your needs or choose from premade/available ones.
          </p>
        </div>
        <div class="card" style={{ color: "gray" }}>
          <h2>Insight</h2>
          <p>
            Find the right fitness goals and workouts that cater to each user's preferences/goals.
          </p>
        </div>
      </div>
    </div>
  );
};
