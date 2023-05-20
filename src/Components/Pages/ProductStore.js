import React, { useContext, useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ProductList from "../ProductList";
import classes from "./ProductStore.module.css";
import CartContext from "../store/CartContext";

const ProductStore = (props) => {
  const location = useLocation();

  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setHideButton(true);
    } else {
      setHideButton(false);
    }
  }, [location.pathname]);
  const cartcntxt = useContext(CartContext);

  return (
    <>
      <Container
      // style={{
      //   maxWidth: "900px",
      //   margin: "0 auto",
      //   padding: "20px 30px",
      // }}
      >
        <h2
          style={{
            fontFamily: "MetalMania",
            fontWeight: "bold",
            marginTop: 40,
            textAlign: "center",
          }}
        >
          MUSIC
        </h2>

        <ProductList></ProductList>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {hideButton && (
            <Button
              variant="secondary"
              style={{
                marginTop: "100px",

                fontSize: "15px",
                fontWeight: "bold",

                color: "rgb(0, 200, 255)",
              }}
              onClick={props.onClicks}
            >
              See the Cart
            </Button>
          )}
        </div>
      </Container>
    </>
  );
};

export default ProductStore;
