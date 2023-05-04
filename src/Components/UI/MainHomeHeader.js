import React, { useContext, useState, useEffect } from "react";
import { Navbar, Button, Nav, Container } from "react-bootstrap";
import classes from "./MainHomeHeader.module.css"

import CartContext from "../store/CartContext";

import { NavLink, useLocation } from "react-router-dom";

const MainHomeHeader = (props) => {
  const cartctx = useContext(CartContext);
  const location = useLocation();

  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setHideButton(true);
    } else {
      setHideButton(false);
    }
  }, [location.pathname]);

  return (
    <>
      {/* --------------------Top NavBar ------------------------------- */}
      {/* <Router> */}
      <Navbar
        bg="dark"
        variant="dark"
        // expand="lg"
        sticky="top"
        style={{ width: "100%" , position:"fixed" }}
      >
        <Container
          style={{
            justifyContent: "center",
            marginTop: "15px",
            marginBottom: "20px",
          }}
        >
          <Nav.Link
            // onClick={showButtonHandler}
            as={NavLink}
            to={"/home"}
            style={{
              color: "white",
              fontSize: "20px",
              position: "fixed",
              left: "30rem",
              
            }}
          >
            HOME
          </Nav.Link>
          <Nav.Link
            // onClick={showButtonHandlerInStore}
            as={NavLink}
            to={"/"}
            style={{
              color: "white",
              fontSize: "20px",
              position: "fixed",
              left: "40rem",
            }}
          >
            STORE
          </Nav.Link>
          <Nav.Link
            // onClick={showButtonHandler}
            as={NavLink}
            to={"/about"}
            style={{
              color: "white",
              fontSize: "20px",
              position: "fixed",
              left: "50rem",
            }}
          >
            ABOUT
          </Nav.Link>
        </Container>

        <Nav>
          {hideButton && (
            <Button
              variant="outline-info"
              className={classes.button}
              onClick={props.onClick}
            >
              Cart
            </Button>
          )}
          {hideButton && (
            <span className={classes.totalAmount}>{cartctx.quantity}</span>
          )}
        </Nav>
      </Navbar>
    </>
  );
};

export default MainHomeHeader;
