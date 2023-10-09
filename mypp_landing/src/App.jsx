import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="hero min-h-screen relative">
        <video autoPlay loop muted className="video-bg absolute top-0 left-0 min-w-full min-h-full">
          <source src="https://i.imgur.com/6o1Uc6H.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Hello there &nbsp;
              <span className="loading loading-ring loading-md"></span>
            </h1>
            <p className="mb-5">
              A to-do list app is a digital tool designed for systematic task
              organization and management. With customizable features, it
              enables users to set deadlines, categorize tasks, and establish
              priorities, fostering enhanced productivity and goal achievement
              in both professional and personal contexts.
            </p>
            <div className="join">
              <a href="https://www.google.com">
                <button className="btn btn-primary join-item">Sign Up</button>
              </a>
              <a href="https://www.google.com">
                <button className="btn btn-neutral join-item">LOGIN</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
