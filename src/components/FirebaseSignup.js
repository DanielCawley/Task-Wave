import { signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "react-bootstrap";
import classes from "./FirebaseSignup.module.css";

const FirebaseSignup = () => {
  console.log("classes", classes);

  return (
    <div className={classes.button}>
      <Button
        variant="outline-secondary"
        style={{
          height: "2.5rem",
          width: "6rem",
          "font-weight": "bold",
          "margin-left": "0.5rem",
        }}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default FirebaseSignup;
