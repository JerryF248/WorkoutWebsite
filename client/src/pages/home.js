import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div class="text">
      <h1>FITNESS CLUB.</h1>
      <p>
        If you want something you've never had, you must be willing to do
        something you've never done
      </p>
      <button
        onClick={() => {
          navigate("/create-workout");
        }}
      >
        Join Now
      </button>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
          </p>
        </div>
        <div class="card">
          <h2>Workout</h2>
          <p style={{ color: "red" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
          </p>
        </div>
        <div class="card">
          <h2>Nutrition</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
          </p>
        </div>
      </div>
    </div>
  );
};
