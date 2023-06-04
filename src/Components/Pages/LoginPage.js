import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./LoginPage.module.css";
import AuthContext from "../store/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const authcntx = useContext(AuthContext);

  const [islogin, setIslogin] = useState(true);

  const inputEmail = useRef();
  const inputPassword = useRef();

  const switchAuthModeHandler = () => {
    setIslogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = inputEmail.current.value;
    const enteredPassword = inputPassword.current.value;

    let url = "";
    if (islogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBE3-kz9AKC2bad9lgfmTIfBRXQiiFj3Qk";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBE3-kz9AKC2bad9lgfmTIfBRXQiiFj3Qk";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errormessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errormessage = data.error.message;
            }
            alert(errormessage);
          });
        }
      })
      .then((data) => {
        console.log(data.idToken);
        authcntx.login(data.idToken);
        // navigate("/store");
      });
  };

  return (
    <section className={classes.login}>
      <h1>{islogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={inputEmail} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={inputPassword} required />
        </div>
        <div className={classes.actions}>
          <button>{islogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {islogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
