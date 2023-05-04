import React,{useState} from 'react'
import MainHomeHeader from './UI/MainHomeHeader'
import HomeHeader from './UI/HomeHeader'
import Cart from './Cart/Cart';

const Ecommerce = (props) => {
  const [openCart, setOpenCart] = useState(false);

  const clickOpenCart = () => {
    setOpenCart(true);
  };

  const closeCart = () => {
    setOpenCart(false);
  };

  return (
    <div>
      <MainHomeHeader onClick={clickOpenCart}/>
      <HomeHeader/>
      {openCart && <Cart onClose={closeCart}></Cart>}
      
    </div>
  )
}

export default Ecommerce
