import React , {useState} from "react";

import Ecommerce from "./Components/Ecommerce";
import { Button } from "react-bootstrap";
import Cart from "./Components/Cart/Cart";
import CartContext from "./Components/store/CartContext";
import CartProvider from "./Components/store/CartProvider";


// import ProductList from "./Components/ProductList";


function App() {
  
  const [openCart ,setOpenCart] = useState(false)

  const clickOpenCart = () =>{
     setOpenCart(true)
    }

  const closeCart = () =>{
    setOpenCart(false)
    }

  return (
    <CartProvider>

      <Ecommerce onClick={clickOpenCart}></Ecommerce>
      {openCart && <Cart onClose={closeCart}></Cart>}
      
     
    </CartProvider>
  );
}

export default App;
