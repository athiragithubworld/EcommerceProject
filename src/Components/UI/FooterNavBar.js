import React from "react";
import { Navbar, Button, Nav , Container} from "react-bootstrap";

const FooterNavBar = () =>{


    return(
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
          paddingLeft: "100px",
          position: "bottom",
          marginTop: "200px",
          textAlign: "center",
          width:"100vw"
        }}
      >
        <Nav> The Generics </Nav>

        <Nav>
          <Container
            style={{
             
              display: "flex",
              // alignItems: "center ",
              // marginLeft: "800px",
              // //  marginInline:"100px"
              position:"relative",
              right:"-300px",
              bottom:"1px"
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
    )
}

export default FooterNavBar;