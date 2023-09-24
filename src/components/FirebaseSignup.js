import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Form, Modal } from "react-bootstrap";
import classes from "./FirebaseSignup.module.css";
import { useState, useRef, useEffect } from "react";

const SignUpModal = (props) => {
  const inputRef = useRef();
  // const [show, setSho] = useState(props.showModal);

  return (
    <Modal show={props.showModal}>
      <Modal.Header>Sign Up</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            style={{ width: "15rem", height: "2rem" }}
            ref={inputRef}
            placeholder="Enter email address"
            onChange={() => {
              // console.log("onChange");
              // console.log("inputRef.current.length", inputRef.current.value.length);
              if (inputRef.current.value.length > 80) {
                console.log("error message");
              }
            }}
          />
        </Form>
        <br />
        <Form>
          <Form.Control
            style={{ width: "15rem", height: "2rem" }}
            ref={inputRef}
            placeholder="Enter password"
            onChange={() => {
              // console.log("onChange");
              // console.log("inputRef.current.length", inputRef.current.value.length);
              if (inputRef.current.value.length > 80) {
                console.log("error message");
              }
            }}
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
        <Button variant="primary">Save Changes</Button>
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
