import React, { useEffect, useState } from "react";
import axios from "axios";

import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  // get values from the crucrud
  let cartitem = [];
  useEffect(() => {
    axios
      .get(
        "https://crudcrud.com/api/7f58f83e53614a0ea0ca7d4ec50ec5ab/cartitemalexainsidetheworldpygmailcom"
      )
      .then((response) => {
        console.log(response.data);
        cartitem = response.data;
        setItems(cartitem);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const [email, setEmail] = useState("");

  // -----------for updating the quantity-------------//

  useEffect(() => {
    let quantity = 0;

    items.forEach((item) => {
      quantity = quantity + parseInt(item.quantity);
    });

    setQuantity(quantity);
  }, [items]);

  // -----------for updating the totalamount----------//

  useEffect(() => {
    let totalAmount = items.reduce(
      (a, v) => (a = Number(a) + Number(v.price * v.quantity)),
      0
    );
    setTotalAmount(totalAmount);
  }, [items]);

  //------------- Add product to cart --------------//
  let LoginEmailId = "";
  const addProductToCart = (item) => {
    const Loginstring = localStorage.getItem("emailobj");
    const Loginobj = JSON.parse(Loginstring);
    LoginEmailId = Loginobj.email;

    let cartItems = [...items];
    let hasItem = false;
    cartItems.forEach((product) => {
      if (product.id === item.id) {
        hasItem = true;
      }
    });

    if (hasItem) {
      alert("This item is already added to the cart");
      // itemList = cartItems;
      setItems(cartItems);
    } else {
      setItems((prevItems) => {
        const productitems = [...prevItems, item];

        //  if (items !== "") {
        axios
          .post(
            `https://crudcrud.com/api/7f58f83e53614a0ea0ca7d4ec50ec5ab/cartitem${LoginEmailId}`,
            {
              id: item.id,
              name: item.name,
              title: item.title,
              price: item.price,
              imageUrl: item.imageUrl,
              quantity: item.quantity,
            }
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        //  }
        return productitems;
      });
    }
  };

  //------------- Remove product from cart --------------//

  const removeProductFromCart = (item) => {
    let cartitems = [...items];
    // console.log("2x2", cartitems);
    cartitems.forEach((product) => {
      if (product.id === item.id) {
        axios
          .delete(
            `https://crudcrud.com/api/7f58f83e53614a0ea0ca7d4ec50ec5ab/cartitemalexainsidetheworldpygmailcom/${product._id}`
          )
          .then((response) => {
            console.log("resss", response);
          })
          .catch((error) => {
            console.log(error);
          });

        const updateList = cartitems.filter((pdt) => pdt.id !== product.id);

        setItems(updateList);
      }
    });
  };

  // ------------Clear all product from the cart ------------//

  const purchaseHandler = () => {
    // console.log("22x22", items);
    items.forEach((item) => {
      axios
        .delete(
          `https://crudcrud.com/api/7f58f83e53614a0ea0ca7d4ec50ec5ab/cartitemalexainsidetheworldpygmailcom/${item._id}`
        )
        .then((response) => {
          console.log("resss", response);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    if (items.length === 0) {
      alert("You have Nothing in Cart , Add some products to purchase !");
    } else {
      setItems([]);
      alert("Thanks for the Purchase");
    }
  };

  const cartcnxt = {
    itemList: items,
    quantity: quantity,
    totalAmount: totalAmount,

    purchaseHandler: purchaseHandler,
    addProduct: addProductToCart,
    removeProduct: removeProductFromCart,
  };

  return (
    <CartContext.Provider value={cartcnxt}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
