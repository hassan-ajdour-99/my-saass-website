import React from "react";
import classes from "./Services.modules.css";

function Services() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h2>
          Don't just take our word for it, see the success stories from
          businesses just like yours.
        </h2>
        <div className={classes.cards}>
          <div className={classes.cart}>
            <p>
              “Our business has seen a significant increase in productivity
              since we started using the Growth app.”
            </p>
            <h3> Get more info </h3>
            <h5>Capodopera</h5>
          </div>
          <p>
            “As a small business owner, it's important to have a tool that can
            help me keep track of everything. The Growth app has been a
            lifesaver for me, allowing me to manage my contacts, schedule
            appointments, and track progress all in one place..”
          </p>
          <h3> Get more info </h3>
          <h5>Capodopera</h5>
          <div className={classes.cart}>
            <p>
              “The dashboards and reporting feature has provided valuable
              insights into our performance and helped us make data-driven
              decisions. It's a game changer for us.”
            </p>
            <h3> Get more info </h3>
            <h5>Capodopera</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
