import './Cart.css'

import React, { useState } from 'react';

const Cart = () => {
  const [cartVisible, setCartVisible] = useState(true);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const cartStyle = {
    transform: cartVisible ? 'translateY(0)' : 'translateY(100%)',
  };

  return (
    <div className="cart-overlay-container" style={cartStyle}>
      <div className="cart-wrapper">
        {/* Cart Content */}
        <div onClick={toggleCart} className="arrow">
        Cart     ▲
        </div>
      </div>
    </div>
  );
};

export default Cart;

