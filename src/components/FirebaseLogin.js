import { signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "react-bootstrap";
import classes from "./FirebaseLogin.module.css";

const FirebaseLogin = () => {
  return (
    <div className={classes.button}>
      <Button
        variant="outline-success"
        style={{ height: "2.5rem", width: "5rem", fontWeight: "bold" }}
      >
        Sign In
      </Button>
    </div>
  );
};

export default FirebaseLogin;
