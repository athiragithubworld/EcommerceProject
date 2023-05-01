import React from "react";
import {Button, Container } from "react-bootstrap";
import ProductList from "../ProductList";

const Store = (props) =>{
    console.log("storeprops",props)

    return(
        <>
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
        </>
    )
}

export default Store;
