import React, { useRef } from "react";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phonenoRef = useRef("");

  async function submitHandler(event) {
    event.preventDefault();

    const userDetails = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phonenoRef.current.value,
    };

    console.log(userDetails);

    const response = await fetch(
      "https://ecommerce-contactus-default-rtdb.firebaseio.com/usercontactdetails.json",
      {
        method: "POST",
        body: JSON.stringify(userDetails),
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    nameRef.current.value = "";
    emailRef.current.value = "";
    phonenoRef.current.value = "";
  }

  return (
    <div>
      <h1 className={classes.h1}>Contact US </h1>
      <div className={classes.container}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            ref={nameRef}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            ref={emailRef}
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your phone number"
            ref={phonenoRef}
          ></input>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            paddingLeft: "10 rem",
          }}
        >
          <button
            onClick={submitHandler}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
