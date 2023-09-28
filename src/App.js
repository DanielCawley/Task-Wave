import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";

import { useState, useRef } from "react";
import DisplayTodos from "./components/DisplayTodos";
import MainNavigation from "./components/MainNavigation";
// import { Button } from "bootstrap";
import image from "./icons/Sea-wave-icon-cartoon-style-vector.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodos from "./components/AddTodos";
import { firebaseConfig } from "./firebase";

import {
  Button,
  Navbar,
  ToggleButtonCheckboxProps,
  FormCheck,
  Form,
} from "react-bootstrap";

function App() {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://task-wave-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
      );
      const data = await response.json();
      console.log("data from use effect:", data);
    };

    fetchData();
  }, []);

  const updateDisplayedTodos = (data) => {
    setTodos(data);
    // here i can also update to firebase
    console.log("update displated todos");
    addTodosToFirebase(data);
  };

  const addTodosToFirebase = async (data) => {
    console.log("adding", data, "to firebase");
    try {
      const response = await fetch(
        "https://task-wave-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
        {
          method: "POST",
          body: JSON.stringify(todos),
          headers: {
            "Content-Type": "appliation/json",
          },
        }
      );
      console.log("Response:", response);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="App">
      <MainNavigation />
      <body className="App-main">
        <AddTodos callUpdateDisplayedTodos={updateDisplayedTodos} />
        <DisplayTodos props={todos} />
        {/* <DisplayTodos props={todos} /> */}
        {/* <img src={image} /> */}
      </body>
    </div>
  );
}

export default App;
