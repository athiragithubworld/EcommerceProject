import React from "react";
import classes from "./ProductList.module.css";
import { Figure, Button, Container, Row, Col } from "react-bootstrap";

const ProductList = () => {
  const productsArr = [
    {
      id: 1,
      name: "Album 1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,
      name: "Album 2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,
      name: "Album 3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,
      name: "Album 4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div>
      {productsArr.map((item) => {
        return (
          // <Container fluid="md" className={classes.container}>
            
              
            <Figure >
              <Figure.Caption className={classes.caption}>
                <h3>{item.name}</h3>
              </Figure.Caption>

              <div  className={classes.container}>
              <Figure.Image
                
                width={250}
                height={250}
                alt="250x250"
                
                src={item.imageUrl}
              />
              </div>
              <Figure.Caption>
                <span className={classes.price}>$ {item.price}</span>
                <span>
                  <Button variant="info"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "0px",
                      marginTop:"10px"
                    }}
                  >
                    ADD TO CART
                  </Button>
                </span>
              </Figure.Caption>
            </Figure>
          
        );
      })}
    </div>
  );
};

export default ProductList;
