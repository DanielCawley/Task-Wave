// import "./App.css";
import React from "react";
import { useState, useRef } from "react";
// import MainNavigation from "./components/MainNavigation";
// import { Button } from "bootstrap";
// import image from "./icons/Sea-wave-icon-cartoon-style-vector.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./AddTodos.module.css";

import {
  Button,
  Navbar,
  ToggleButtonCheckboxProps,
  FormCheck,
  Form,
} from "react-bootstrap";
function AddTodos(props) {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  props.callUpdateDisplayedTodos(todos);

  const handleSubmit = () => {
    const newTodo = inputRef.current.value.trim(); // Remove leading/trailing whitespace
    if (newTodo) {
      setTodos((prev) => [...prev, newTodo]);
      console.log(inputRef.current.value);
      inputRef.current.value = ""; // Clear the input field
      inputRef.current.focus();
    } // Focus on the input field
  };

  return (
    <div className={classes.appInput}>
      <Form>
        <Form.Control
          style={{ width: "35rem", height: "2rem" }}
          ref={inputRef}
          placeholder="Enter to-do"
          onChange={() => {
            // console.log("onChange");
            // console.log("inputRef.current.length", inputRef.current.value.length);
            if (inputRef.current.value.length > 80) {
              console.log("error message");
            }
          }}
        />
      </Form>

      <Button
        variant="primary"
        onClick={handleSubmit}
        style={{ height: "3rem" }}
      >
        Enter to-do
      </Button>
    </div>
  );
}

export default AddTodos;
