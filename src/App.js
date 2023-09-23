import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useRef } from "react";
import DisplayTodos from "./components/DisplayTodos";
import MainNavigation from "./components/MainNavigation";
// import { Button } from "bootstrap";
import image from "./icons/Sea-wave-icon-cartoon-style-vector.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodos from "./components/AddTodos";

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

  const updateDisplayedTodos = (data) => {
    setTodos(data);
    // here i can also update to firebase
    addTodosToFirebase(data);
  };

  const addTodosToFirebase = async (data) => {
    console.log("adding", data, "to firebase");
    // const response = await fetch(
    //   "https://console.firebase.google.com/u/0/project/task-wave/database/task-wave-default-rtdb/data/~2F",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "appliation/json",
    //     },
    //   }
    // );
    // console.log("Response:", response);
  };

  return (
    <div className="App">
      <MainNavigation />
      <body className="App-main">
        <AddTodos callUpdateDisplayedTodos={updateDisplayedTodos} />
        <DisplayTodos props={todos} />
        {/* <img src={image} /> */}
      </body>
    </div>
  );
}

export default App;
