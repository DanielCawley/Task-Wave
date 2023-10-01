import React, { useState } from "react";
// import Login from "./Login";
import classes from "./MainNavigation.module.css";
import FirebaseLogin from "./FirebaseLogin";
import FirebaseSignup from "./FirebaseSignup";
import image from "../icons/Sea-wave-icon-cartoon-style-vector.jpg";

const MainNavigation = () => {
  const [signedIn, setSignedIn] = useState(false);

  const handleSignedIn = () => {
    setSignedIn(true);
  };

  return (
    <div>
      <div className={classes.Nav}>
        {/* <Login /> */}
        <h1>task-wave.web.app</h1>
        <img src={image} />
        <img src={image} />
        <img src={image} />
        {signedIn ? (
          <div className={classes.signedIn}>Singed In</div>
        ) : (
          <div className={classes.firebase}>
            <FirebaseLogin onSignedIn={handleSignedIn} />
            <FirebaseSignup />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainNavigation;
