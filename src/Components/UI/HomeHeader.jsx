import React, { useState } from "react";
import { useEffect } from "react";
import { Navbar, Button, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const HomeHeader = () => {
  const location = useLocation();

  console.log("loc", location.pathname);

  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    if (location.pathname === "/home") {
      setHideButton(true);
    } else {
      setHideButton(false);
    }
  }, [location.pathname]);

  return (
    <div>
      {/* ----------Second Navbar ---------------- */}

      <Navbar
        bg="secondary"
        variant="dark"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          placeItems: "center",
          width: "100vw",
          marginTop: "55px",
        }}
      >
        <Container
          style={{
            width: "100%",
          }}
        >
          <Navbar.Collapse className="justify-content-center">
            <Navbar
              style={{
                color: "white",
                // top: "-35px",
                // right: "30rem",
                // padding: "20px",
                fontSize: "100px",
                fontWeight: "bold",
                fontFamily: "Times New Roman, Times, serif",
              }}
            >
              The Generics
            </Navbar>
          </Navbar.Collapse>
        </Container>

        <Container>
          <Navbar.Collapse className="justify-content-center">
            {hideButton && (
              <button
                style={{
                  // display: "block",
                  border: "1px solid #56CCF2",
                  padding: "15px 30px",
                  fontSize: "23px",
                  fontWeight: "200",
                  background: "inherit",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                Get Our Latest Album
              </button>
            )}
          </Navbar.Collapse>
        </Container>

        <Container>
          <Navbar.Collapse>
            {hideButton && (
              <button
                style={{
                  cursor: "pointer",
                  border: "2px solid #56CCF2",
                  borderRadius: "50%",
                  padding: "20px",
                  fontSize: "30px",
                  fontWeight: "200",
                  background: "inherit",
                  color: "#56CCF2",
                  margin: "20px auto",
                }}
              >
                ►
              </button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomeHeader;
