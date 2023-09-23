import React from "react";
// import Login from "./Login";
import classes from "./MainNavigation.module.css";
import FirebaseLogin from "./FirebaseLogin";
import image from "../icons/Sea-wave-icon-cartoon-style-vector.jpg";

const MainNavigation = () => {
  return (
    <div>
      <div className={classes.Nav}>
        {/* <Login /> */}
        <h1>task-wave.web.app</h1>
        <img src={image} />
        <img src={image} />
        <img src={image} />
        <FirebaseLogin />
      </div>
    </div>
  );
};

export default MainNavigation;
