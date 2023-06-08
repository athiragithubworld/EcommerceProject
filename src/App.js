import React, { useState, useContext, useEffect } from "react";
import Ecommerce from "./Components/Ecommerce";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/store/CartProvider";
import About from "./Components/Pages/About";
import ProductStore from "./Components/Pages/ProductStore";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./Components/Pages/Home";
import FooterNavBar from "./Components/UI/FooterNavBar";
import HomeHeader from "./Components/UI/HomeHeader";
import ContactUs from "./Components/Pages/ContactUs";
import ProductDetails from "./Components/Pages/ProductDetails";
import LoginPage from "./Components/Pages/LoginPage";
import AuthProvider from "./Components/store/AuthProvider";
import AuthContext from "./Components/store/AuthContext";
// import ProductList from "./Components/ProductList";

function App() {
  const authcntx = useContext(AuthContext);
  const navigate = useNavigate();

  const logined = authcntx.isLoggedIn;

  const [openCart, setOpenCart] = useState(false);

  const clickOpenCart = () => {
    setOpenCart(true);
  };

  const closeCart = () => {
    setOpenCart(false);
  };

  useEffect(() => {
    if (authcntx.isLoggedIn) {
      navigate("/store");
    } else {
      closeCart();
    }
  }, [authcntx.isLoggedIn]);

  return (
    <>
      <Ecommerce />
      <HomeHeader></HomeHeader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {authcntx.isLoggedIn && (
          <Route
            path="/store"
            element={<ProductStore onClicks={clickOpenCart} />}
          />
        )}
        {!authcntx.isLoggedIn && (
          <Route path="/store" element={<Navigate to="/login" />} />
        )}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
      <FooterNavBar></FooterNavBar>
      {authcntx.isLoggedIn && openCart && <Cart onClose={closeCart}></Cart>}
    </>
  );
}

export default App;
