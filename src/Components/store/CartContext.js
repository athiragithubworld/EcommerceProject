import React from "react";

const CartContext = React.createContext({
  itemList: [],
  quantity: 0,
  totalAmount: 0,
  purchaseHandler: () => {},
  addProduct: (product) => {},
  removeProduct: (product) => {},
  // alert:''
});

export default CartContext;
