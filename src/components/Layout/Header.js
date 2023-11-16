import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className={classes.menu}>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>About</li>
            <li className={classes.btnLogin}>login</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
