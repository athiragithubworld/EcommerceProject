import React, { useState } from "react";

import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

import { Figure , Button} from "react-bootstrap";

const Cart = (props) => {
  const cartElements = [
    {
      id: 1,
      name: "Album 1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },

    {
      id: 2,
      name: "Album 2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },

    {
      id: 3,
      name: "Album 3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

const [items,setItems] = useState(cartElements)

  const cartItemRemoveHandler = (item) =>{
    let cartitems =[...items]
    cartitems.forEach((product) =>{
        if(product.id === item.id && item.quantity <=1){
            product.quantity=Number(product.quantity)-Number(item.quantity)

            if(product.quantity===0){
                const updateList=cartitems.filter(pdt =>pdt.id !==product.id)
                setItems(updateList)
            }
        }

        if (product.id === item.id && item.quantity > 1) {
            product.quantity = Number(product.quantity) - 1;
            setItems(cartitems);
          }



    }) 
  }

  let totalAmount = items.reduce(
    (a, v) => (a = Number(a) + Number(v.price * v.quantity)),
    0
  );

  return (
    // <div className={classes.cartForm}>
    <Modal>
      <h2 className={classes["cart-h2"]}>Cart</h2>
      <button className={classes.close} onClick={props.onClose}>
        {" "}
        X{" "}
      </button>
      <div className={classes["cart-heading"]}>
        <span className={classes["cart-item"]}>ITEM</span>
        <span className={classes["cart-price"]}>PRICE</span>
        <span className={classes["cart-quantity"]}>QUANTITY</span>
      </div>
      <div>
        <ul style={{ listStyle: "none" }}>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <span className={classes["cartItem-image"]} >
                  <Figure >
                  <Figure.Image
                    width={70}
                    height={70}
                    alt="10x10" 
                    src={item.imageUrl}
                  ></Figure.Image>
                  </Figure>
                  <span className={classes["cartItem-name"]}>{item.name}</span>
                  <span className={classes["cartItem-price"]}>{item.price}</span>
                <span className={classes["cartItem-quantity"]}>{item.quantity}</span>
                <span>
                <Button variant="danger" style={{padding:"1px" , paddingTop:"1px" , borderRadius:".5px"}} onClick={() =>cartItemRemoveHandler(item)}>Remove</Button>
                </span>
                
                </span>
                
                
                
              </li>
            );
          })}
        </ul>
      </div>

          <div className={classes.total}>
        <span>Total Amount </span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>

    </Modal>
    // </div>
  );
};

export default Cart;
