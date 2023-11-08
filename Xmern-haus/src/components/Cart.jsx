import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../global'
import axios from 'axios'
import './Cart.css'

const Cart = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  //creating our state to store our items the user has selected
  const [cartItems, setCartItems] = useState([])

  
  const toggleCart = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const getItems = async () => {
      if(menuOpen) {
        const response = axios.get(`${BASE_URL}carts/`)
          .then(response => {
              setCartItems(response.data)
          })
          .catch(error => {
            console.error('Error grabbing cart items', error)
          })}
    }
    getItems()
  }, [menuOpen])

  return (
    <div className={`cart-overlay-container ${menuOpen ? 'open' : ''}`}>
      <div className="cart-wrapper">
        <div className="arrow" onClick={toggleCart}>
          Cart
        </div>
        {menuOpen && (
          <div className="menu">
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.current_order}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart