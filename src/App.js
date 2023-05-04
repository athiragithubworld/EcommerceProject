import React, { useState } from "react";

import Ecommerce from "./Components/Ecommerce";
import { Button } from "react-bootstrap";
import Cart from "./Components/Cart/Cart";
import CartContext from "./Components/store/CartContext";
import CartProvider from "./Components/store/CartProvider";
import About from "./Components/Pages/About";
import ProductStore from "./Components/Pages/ProductStore";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import FooterNavBar from "./Components/UI/FooterNavBar";
import HomeHeader from "./Components/UI/HomeHeader";

// import ProductList from "./Components/ProductList";

function App() {
  const [openCart, setOpenCart] = useState(false);

  const clickOpenCart = () => {
    setOpenCart(true);
  };

  const closeCart = () => {
    setOpenCart(false);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <Ecommerce />
        {/* <HomeHeader></HomeHeader> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<ProductStore onClicks={clickOpenCart} />}  />
        </Routes>
        <FooterNavBar></FooterNavBar>
        {openCart && <Cart onClose={closeCart}></Cart>}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
