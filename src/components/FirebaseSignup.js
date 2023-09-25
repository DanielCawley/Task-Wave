import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Button, Form, Modal } from "react-bootstrap";
import classes from "./FirebaseSignup.module.css";
import { useState, useRef, useEffect } from "react";
import app from "../firebase";
import { getAuth } from "firebase/auth";

// const auth = getAuth(app);
// console.log("auth =", auth);
// connectAuthEmulator(auth, "http://localhost:9099");

const SignUpModal = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  // const [show, setSho] = useState(props.showModal);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const auth = getAuth(app);
    console.log("auth =", auth);

    // connectAuthEmulator(auth, "http://localhost:9099");
    // connectAuthEmulator(auth, "http://127.0.0.1:9099");

    const email = emailInputRef.current.value;
    const password = emailInputRef.current.value;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("usercredentials", userCredential.user);
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  return (
    <Modal show={props.showModal}>
      <Modal.Header>Sign Up</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            style={{ width: "15rem", height: "2rem" }}
            ref={emailInputRef}
            placeholder="Enter email address"
          />
        </Form>
        <br />
        <Form>
          <Form.Control
            style={{ width: "15rem", height: "2rem" }}
            ref={passwordInputRef}
            placeholder="Enter password"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            props.onHide();
            // basically calls a function to set the showModal variable to False
          }}
        >
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const FirebaseSignup = () => {
  console.log("classes", classes);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={classes.button}>
      <Button
        variant="outline-secondary"
        style={{
          height: "2.5rem",
          width: "6rem",
          fontWeight: "bold",
          marginleft: "0.5rem",
        }}
        onClick={handleShowModal}
      >
        Sign Up
      </Button>
      {showModal ? (
        <SignUpModal showModal={showModal} onHide={handleCloseModal} />
      ) : (
        ""
      )}

      <Modal />
    </div>
  );
};

export default FirebaseSignup;
