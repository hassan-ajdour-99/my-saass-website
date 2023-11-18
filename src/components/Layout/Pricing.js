import React from "react";
import classes from "./Pricing.module.css";

function Pricing() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>Pricing</h1>
        <p>
          Start free and scale while you grow. No hidden fees. Unlimited users
          for free.
        </p>
        <div className={classes.cards}>
          <div className={classes.card1}>
            <h1>Simple</h1>
            <p>
              Keep track of your contacts, gain valuable insights, analyse live
              data and performance metrics.
            </p>
            <h1>
              Free <span>*No credit card needed</span>
            </h1>
            <span className={classes.borderButtom2}></span>
            <div className={classes.services}>
              <p> Real-Time Monitoring</p>
              <p>Track key performance indicators</p>
              <p>Schedule appointments</p>
              <p>Organize, delegate and keep track of tasks</p>
            </div>
            <button> Get Started </button>
          </div>
          <div className={classes.card2}>
            <h1>Premuim</h1>
            <p>
              Keep track of your contacts, gain valuable insights, analyze live
              data and performance metrics.
            </p>
            <h1>$49 /month</h1>
            <span className={classes.borderButtom}></span>
            <div className={classes.services}>
              <p>Everything from the free plan plus:</p>
              <p>Data-driven decisions</p>
              <p>Data visualization</p>
              <p>Schedule appointments</p>
            </div>
            <button> Get Started </button>
          </div>
        </div>
        <h3>
          All prices are in USD and charged per month with applicable taxes
          added at checkout.
        </h3>
      </div>
    </div>
  );
}

export default Pricing;
