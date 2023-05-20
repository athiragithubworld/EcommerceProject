import React from "react";
import { Navbar, Button, Nav, Container } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const FooterNavBar = () => {
  return (
    <>
      <Navbar
        variant="info"
        bg="info"
        // expand="lg"
        style={{
          color: "white",
          fontSize: "40px",
          fontWeight: "bold",
          fontFamily: "Times New Roman, Times, serif ",
          // paddingLeft: "100px",
          position: "bottom",
          marginTop: "200px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Container style={{ width: "70%" }}>
          <Nav> The Generics </Nav>

          <Nav>
            <Navbar.Collapse>
              <Nav.Link href="https://www.youtube.com/">
                <img
                  width={30}
                  height={26}
                  alt="30x26"
                  src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
                ></img>
              </Nav.Link>
            </Navbar.Collapse>
            <Navbar.Collapse>
              <Nav.Link href="https://spotify.com/">
                <img
                  width={30}
                  height={26}
                  alt="30x26"
                  src="https://prasadyash2411.github.io/ecom-website/img/Spotify Logo.png"
                ></img>
              </Nav.Link>
            </Navbar.Collapse>
            <Navbar.Collapse>
              <Nav.Link href="https://facebook.com/">
                <img
                  width={30}
                  height={26}
                  alt="30x26"
                  src="https://prasadyash2411.github.io/ecom-website/img/Facebook Logo.png"
                ></img>
              </Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default FooterNavBar;
