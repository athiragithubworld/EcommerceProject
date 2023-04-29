import React from "react";
import classes from "./AlertMessage.module.css";

import { Alert } from "react-bootstrap";

const AlertMessage = (props) => {
  console.log("props", props.name);
  return (
    <Alert
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "5rem",
        padding: "30px",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "deepskyblue",
        color: "black",
        fontSize: "15px",
      }}
    >
      Your Product: 
      <span className={classes.name}> { props.name  } </span>
      is added to cart
    </Alert>
  );
};

export default AlertMessage;
