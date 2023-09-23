import React from "react";
import { FormCheck } from "react-bootstrap";
import classes from "./DisplayTodos.module.css";

const DisplayTodos = (inputInformation) => {
  const { props } = inputInformation;
  console.log(props);

  return (
    <div>
      {props.map((prop, index) => (
        <div key={index} className={classes.display}>
          <FormCheck
            type="checkbox"
            label={prop}
            id={`checkbox-${index}`}
            className={classes.formCheckClass}
          />
          <prop />
        </div>
      ))}
    </div>
  );
};

export default DisplayTodos;
