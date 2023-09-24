import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Form, Modal } from "react-bootstrap";
import classes from "./FirebaseSignup.module.css";
import { useState, useRef, useEffect } from "react";

const SignUpModal = (props) => {
  const inputRef = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.showModal);
  }, [props]);
  return (
    <Modal show={show}>
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
            console.log("setshow(false)");
            setShow(false);
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
    console.log("handleShowModal");
    setShowModal(true);
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
      {showModal ? <SignUpModal showModal={showModal} /> : ""}

      <Modal />
    </div>
  );
};

export default FirebaseSignup;
