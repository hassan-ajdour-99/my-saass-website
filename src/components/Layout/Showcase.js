import React from "react";
import classes from "./Showcase.module.css";

function Showcase() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>See how it works and get started in less than 2 minutes</h1>
        <img src="/images/video-preview.png" alt="video-preview" />
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Showcase;
