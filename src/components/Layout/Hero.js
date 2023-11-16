import React from "react";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.hero}>
          <h1>A powerful solution to grow your startup. Fast!</h1>
          <p>
            Organize, collaborate, and track progress seamlessly with our
            one-stop-shop startup growth tool.
          </p>
          <div className={classes.getButton}>
            <button className={classes.button1}> Get Started </button>
            <button className={classes.button2}> Book a Demo Now </button>
          </div>
        </div>
        <div className={classes.heroImage}>
          <img src="/images/hero-bg.png" alt="hero-image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
