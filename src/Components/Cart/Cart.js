import React, { useContext } from "react";

import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

import { Figure, Button } from "react-bootstrap";

import CartContext from "../store/CartContext";

const Cart = (props) => {
  const cartctx = useContext(CartContext);
  
  // const cartElements = [
  //   {
  //     id: 1,
  //     name: "Album 1",
  //     title: "Colors",
  //     price: 100,
  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  //     quantity: 2,
  //   },

  //   {
  //     id: 2,
  //     name: "Album 2",
  //     title: "Black and white Colors",
  //     price: 50,
  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  //     quantity: 3,
  //   },

  //   {
  //     id: 3,
  //     name: "Album 3",
  //     title: "Yellow and Black Colors",
  //     price: 70,
  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  //     quantity: 1,
  //   },
  // ];



  // -------------totalAmount--------------//
  const totalAmount = cartctx.totalAmount


  // ---------------Remove item one by one from the cart -------------//

  const cartItemRemoveHandler = (item) => {
    console.log("removeitem", item);
    cartctx.removeProduct(item);
  };

  
// ---------------------Remove all item from the cart --------------//

  const purchaseHandler = () => {
    cartctx.purchaseHandler();
  };

  return (
    <Modal>
      <h2 className={classes["cart-h2"]}>Cart</h2>
      <button className={classes.close} onClick={props.onClose}>
        X
      </button>
      <div className={classes["cart-heading"]}>
        <span className={classes["cart-item"]}>ITEM</span>
        <span className={classes["cart-price"]}>PRICE</span>
        <span className={classes["cart-quantity"]}>QUANTITY</span>
      </div>
      <div>
        {/* showing items in cart */}
        <ul style={{ listStyle: "none" }}>
          {cartctx.itemList.map((item) => {
            return (
              <li key={item.id}>
                <span className={classes["cartItem-image"]}>
                  <Figure>
                    <Figure.Image
                      width={70}
                      height={70}
                      alt="10x10"
                      src={item.imageUrl}
                    ></Figure.Image>
                  </Figure>
                  <span className={classes["cartItem-name"]}>{item.name}</span>
                  <span className={classes["cartItem-price"]}>
                    {item.price}
                  </span>
                  <span className={classes["cartItem-quantity"]}>
                    {item.quantity}
                  </span>
                  <span>
                    <Button
                      variant="danger"
                      style={{
                        padding: "1px",
                        paddingTop: "1px",
                        borderRadius: ".5px",
                      }}
                      onClick={() => cartItemRemoveHandler(item)}
                    >
                      Remove
                    </Button>
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={classes.total}>
        <span> Total Amount : ${totalAmount.toFixed(2)}</span>
      </div>

      <div>
        <Button
          variant="info"
          style={{
            textAlign: "center",
            fontSize: "15px",
            fontWeight: "bold",
            padding: "10px",
            color: "white",
            marginLeft: "120px",
            marginTop: "60px",
          }}
          onClick={purchaseHandler}
        >
          Purchase
        </Button>
      </div>
    </Modal>
    // </div>
  );
};

export default Cart;
