import React from "react";
// import Login from "./Login";
import classes from "./MainNavigation.module.css";
import FirebaseLogin from "./FirebaseLogin";
import FirebaseSignup from "./FirebaseSignup";
import image from "../icons/Sea-wave-icon-cartoon-style-vector.jpg";

const MainNavigation = () => {
  const handleSignedIn = () => {
    console.log("user has signed in - from the main navigation file");
  };

  return (
    <div>
      <div className={classes.Nav}>
        {/* <Login /> */}
        <h1>task-wave.web.app</h1>
        <img src={image} />
        <img src={image} />
        <img src={image} />
        <div className={classes.firebase}>
          <FirebaseLogin onSignedIn={handleSignedIn} />
          <FirebaseSignup />
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
