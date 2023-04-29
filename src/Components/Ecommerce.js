import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Button, Nav } from "react-bootstrap";
import classes from "./Ecommerce.module.css";
import ProductList from "./ProductList";
import CartContext from "./store/CartContext";

const Ecommerce = (props) => {
  const cartctx = useContext(CartContext);

  return (
    <>
      {/* --------------------Top NavBar ------------------------------- */}

      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container style={{ justifyContent: "center" }}>
          <Navbar.Brand href="#home" className={classes.home}>
            HOME
          </Navbar.Brand>
          <Navbar.Brand href="#store" className={classes.store}>
            STORE
          </Navbar.Brand>
          <Navbar.Brand href="#about" className={classes.about}>
            ABOUT
          </Navbar.Brand>
        </Container>

        <Nav>
          <Button
            variant="outline-info"
            className={classes.button}
            onClick={props.onClick}
          >
            Cart
          </Button>
          <span className={classes.totalAmount}> {cartctx.quantity} </span>
        </Nav>
      </Navbar>

      <br />
      {/* ----------Second Navbar ---------------- */}

      <Navbar
        expand="xxl"
        bg="secondary"
        variant="dark"
        className={classes.navbar2}
        style={{ justifyContent: "center" }}
      >
        The Generics
      </Navbar>

      {/* ---------------------------Show Product Items--------------------------- */}

      <Container>
        <h2
          style={{
            fontFamily: "MetalMania",
            fontWeight: "bold",
            marginTop: 40,
            textAlign: "center",
          }}
        >
          {" "}
          MUSIC
        </h2>

        <ProductList></ProductList>
      </Container>
      <div>
        <Button
          variant="secondary"
          style={{
            marginTop: "100px",
            textAlign: "center",
            marginLeft: "680px",
            fontSize: "15px",
            fontWeight: "bold",
            padding: "10px",
            color: "rgb(0, 200, 255)",
          }}
          onClick={props.onClick}
        >
          {" "}
          See the Cart
        </Button>
      </div>

      {/*------------ Bottom Navbar--------------- */}

      <Navbar
        variant="info"
        bg="info"
        expand="lg"
        style={{
          color: "white",
          fontSize: "50px",
          fontWeight: "bold",
          fontFamily: "Times New Roman, Times, serif ",
          paddingLeft: "100px",
          position: "bottom",
          marginTop: "200px",
          textAlign: "center",
        }}
      >
        <Nav> The Generics </Nav>

        <Nav>
          <Container
            style={{
              width: "80%",
              display: "flex",
              alignItems: "center ",
              marginLeft: "800px",
              // marginInline:"100px"
            }}
          >
            <Nav.Link href="https://www.youtube.com/">
              <img
                width={30}
                height={26}
                alt="30x26"
                src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
              ></img>
            </Nav.Link>

            <Nav.Link href="https://spotify.com/">
              <img
                width={30}
                height={26}
                alt="30x26"
                src="https://prasadyash2411.github.io/ecom-website/img/Spotify Logo.png"
              ></img>
            </Nav.Link>

            <Nav.Link href="https://facebook.com/">
              <img
                width={30}
                height={26}
                alt="30x26"
                src="https://prasadyash2411.github.io/ecom-website/img/Facebook Logo.png"
              ></img>
            </Nav.Link>
          </Container>
        </Nav>
      </Navbar>
    </>
  );
};

export default Ecommerce;
