import React, { useContext } from "react";
import { Navbar, Button, Nav, Container } from "react-bootstrap";
import classes from "./Ecommerce.module.css";

import CartContext from "./store/CartContext";
// import FooterNavBar from "./UI/FooterNavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Store from "./Pages/Store";

const Ecommerce = (props) => {
  const cartctx = useContext(CartContext);

  return (
    <>
      {/* --------------------Top NavBar ------------------------------- */}
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container style={{ justifyContent: "center" }}>
            <Nav.Link as={Link} to={"/home"} style={{color:'white' , fontSize:'20px' , position:'fixed',left:'30rem'}}>
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to={"/"} style={{color:'white' , fontSize:'20px' ,position:'fixed',left:'40rem'}}>
              STORE
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"} style={{color:'white' , fontSize:'20px' , position:'fixed',left:'50rem'}}>
              ABOUT
            </Nav.Link>
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

        <br/>

      
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

      <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Store />} />
          </Routes>
        </div>
      </Router>
      {/* ---------------------------Show Product Items--------------------------- */}

      {/* <Container>
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
      </div> */}

      {/*------------ Bottom Navbar--------------- */}

      <Navbar
        variant="info"
        bg="info"
        expand="lg"
        style={{
          color: "white",
          fontSize: "30px",
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
