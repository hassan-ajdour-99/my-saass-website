import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>logo</div>
      <div className={classes.content}>
        <div className={classes.subscribe}></div>
        <div className={classes.company}></div>
        <div className={classes.resources}></div>
      </div>
      <div className={classes.media}>linkdin</div>
    </div>
  );
}

export default Footer;
