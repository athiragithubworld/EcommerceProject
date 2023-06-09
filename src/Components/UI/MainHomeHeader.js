import React, { useContext, useState, useEffect } from "react";
import { Navbar, Button, Nav, Container } from "react-bootstrap";
import classes from "./MainHomeHeader.module.css";

import CartContext from "../store/CartContext";
import AuthContext from "../store/AuthContext";
import { NavLink, useLocation } from "react-router-dom";

const MainHomeHeader = (props) => {
  const cartctx = useContext(CartContext);
  const authcntx = useContext(AuthContext);

  // const isLoggedIn = authcntx.isLoggedIn;

  const LogoutHandler = () => {
    authcntx.logout();
  };

  const location = useLocation();

  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    if (location.pathname === "/store") {
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
        sticky="top"
        style={{ width: "100%", position: "fixed" }}
      >
        <Container
          style={{
            width: "50%",
          }}
        >
          <Navbar.Collapse className="justify-content-center">
            <Nav.Link
              as={NavLink}
              to={"/"}
              style={{
                color: "white",
                fontSize: "20px",
              }}
            >
              HOME
            </Nav.Link>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-center">
            <Nav.Link
              as={NavLink}
              to={"/store"}
              style={{
                color: "white",
                fontSize: "20px",
              }}
            >
              STORE
            </Nav.Link>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-center">
            <Nav.Link
              as={NavLink}
              to={"/about"}
              style={{
                color: "white",
                fontSize: "20px",
                // position: "fixed",
                // left: "50rem",
              }}
            >
              ABOUT
            </Nav.Link>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-center">
            <Nav.Link
              as={NavLink}
              to={"/contactus"}
              style={{
                color: "white",
                fontSize: "20px",
                // position: "fixed",
                // left: "50rem",
              }}
            >
              CONTACT US
            </Nav.Link>
          </Navbar.Collapse>

          {!authcntx.isLoggedIn && (
            <Navbar.Collapse className="justify-content-center">
              <Nav.Link
                as={NavLink}
                to={"/login"}
                style={{
                  color: "white",
                  fontSize: "20px",
                  // position: "fixed",
                  // left: "50rem",
                }}
              >
                LOGIN
              </Nav.Link>
            </Navbar.Collapse>
          )}
        </Container>

        <Nav>
          {hideButton && authcntx.isLoggedIn && (
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
          {hideButton && (
            <Button
              variant="btn btn-outline-secondary"
              // className={classes.button}
              onClick={LogoutHandler}
            >
              Logout
            </Button>
          )}
        </Nav>
      </Navbar>
    </>
  );
};

export default MainHomeHeader;
