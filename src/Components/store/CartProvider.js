import React, { useEffect, useState } from "react";

import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // -----------for updating the quantity-------------//

  useEffect(() => {
    let quantity = 0;

    items.forEach((item) => {
      quantity = quantity + parseInt(item.quantity);
    });

    setQuantity(quantity);
  }, [items]);

// -----------for updating the totalamount----------//

  useEffect(()=>{
    let totalAmount = items.reduce(
      (a, v) => (a = Number(a) + Number(v.price * v.quantity)),
      0
    );
    setTotalAmount(totalAmount)
  },[items])


  //------------- Add product to cart --------------//

  const addProductToCart = (item) => {
    let cartItems = [...items];
    let hasItem = false;
    cartItems.forEach((product) => {
      if (product.id === item.id) {
        hasItem = true;
      }
    });

    if (hasItem) {
      alert("This item is already added to the cart");
      setItems(cartItems);
    } else {
      setItems((prevItems) => {
        const productitems = [...prevItems, item];

        return productitems;
      });
    }
  };


  //------------- Remove product from cart --------------//

  const removeProductFromCart = (item) => {
    let cartitems = [...items];
    cartitems.forEach((product) => {
      if (product.id === item.id) {
        const updateList = cartitems.filter((pdt) => pdt.id !== product.id);
        setItems(updateList);
      }
    });
  };

  // ------------Clear all product from the cart ------------//

  const purchaseHandler = () => {
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
    totalAmount:totalAmount,
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
