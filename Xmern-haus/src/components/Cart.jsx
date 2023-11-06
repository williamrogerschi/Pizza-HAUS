import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleCart = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`cart-overlay-container ${menuOpen ? 'open' : ''}`}>
      <div className="cart-wrapper">
        <div className="arrow" onClick={toggleCart}>
          Cart ▲
        </div>
        {menuOpen && (
          <div className="menu">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;