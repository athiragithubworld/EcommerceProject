import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  const intialToken = localStorage.getItem("token");
  const [token, setToken] = useState(intialToken);

  const userLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    // setTimeout(() => {
    //   logoutHandler();
    // }, 30000);
  };

  const contxtvalue = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  console.log("aa", contxtvalue);
  return (
    <AuthContext.Provider value={contxtvalue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
