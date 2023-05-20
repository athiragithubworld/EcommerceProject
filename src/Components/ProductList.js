import React, { useContext, useEffect, useState } from "react";
import classes from "./ProductList.module.css";
import { Figure, Button, Container, Row, Col } from "react-bootstrap";
import CartContext from "./store/CartContext";
import AlertMessage from "./UI/AlertMessage";

const ProductList = () => {
  const cartcxt = useContext(CartContext);
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [name]);

  const addItemTocart = (item) => {
    if (name !== item.name) {
      setAlert(true);
      setName(item.name);
    }

    cartcxt.addProduct({ ...item, quantity: 1 });
  };

  return (
    <div>
      <Container
        className="justify-content-xs-center"
        style={{ background: "red", marginTop: "10rem" }}
      >
        <div>
          <Row
          // className="justify-content-xs-center"
          // xs={{ span: 2, offset: 1 }}
          >
            {productsArr.map((item) => {
              return (
                <Col
                  className="justify-content-xs-center"
                  key={item.id}
                  sm={{ span: 3, offset: 2 }}
                  xs={{ span: 4, offset: 3 }}
                >
                  <h3
                    style={{
                      textAlign: "center",
                      marginBottom: "3rem",
                      marginTop: "1rem",
                    }}
                  >
                    {item.name}
                  </h3>

                  {/* <div className={classes.container}> */}
                  <img
                    width={200}
                    height={200}
                    alt="200x200"
                    src={item.imageUrl}
                  />
                  {/* </div> */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      // marginTop: "1px",
                    }}
                  >
                    <span
                      style={{
                        color: "black",
                        marginTop: ".5rem",
                        // PaddingRight: "2px",
                      }}
                    >
                      $ {item.price}
                    </span>
                    <span>
                      <Button
                        variant="info"
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          borderRadius: "0px",
                          marginTop: "10px",
                          marginBottom: "10px",
                          // marginLeft: "30px",
                        }}
                        onClick={() => addItemTocart(item)}
                      >
                        ADD TO CART
                      </Button>
                    </span>
                  </div>

                  {alert && <AlertMessage name={name} />}
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ProductList;

// {/* <Container fluid style={{ background: "red", marginTop: "10rem" }}>
//   <div>
//     <Row className="justify-content-xs-center" xs={{ span: 2, offset: 1 }}>
//       {images.map((image) => (
//         <Col
//           // className="justify-content-xm-center"
//           key={image.id}
//           sm={{ span: 4, offset: 2 }}
//           xs={{ span: 4, offset: 3 }}
//         >

//           <img src={image.src} width={150} height={156} alt="150x156" />
//           <div
//             style={{
//               marginTop: "5px",
//               marginBottom: "15px",
//             }}
//           >
//             <span style={{ paddingRight: "12px" }}>Id :{image.id}</span>
//             <Button> Add to Cart</Button>
//           </div>
//         </Col>
//       ))} */}
//     </Row>
//   </div>
// </Container>;
