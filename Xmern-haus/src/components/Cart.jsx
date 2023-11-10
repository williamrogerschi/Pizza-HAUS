import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../global'
import axios from 'axios'
import './Cart.css'

const Cart = (props) => {
  
  
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartItems, setCartItems] = useState({ cart: { current_order: [] } })

  const toggleCart = () => {
    setMenuOpen(!menuOpen)
  }

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`${BASE_URL}users/${props.userData._id}`)
      setCartItems(response.data);
      console.log('fetching cart', response.data)
    } catch (error) {
      console.error('Error grabbing cart items', error)
    }
  }  

  useEffect(() => {
    const getCart = async () => {
      if (menuOpen) {   
        await fetchCartItems()
       }
    }
    getCart()

  }, [menuOpen])

  const removeItem = async (menuId, itemType) => {
    try {
      const orderId = cartItems.cart.current_order[0]._id
      console.log('id:', orderId)
      await axios.put(`${BASE_URL}orders/${orderId}/menuItem/${menuId}`)

      // Fetch updated cart items after successful removal
      await fetchCartItems()

      console.log('Removed item with id:', menuId)
    } catch (error) {
      console.error('Error removing item', error)
    }
  }

  const removeCYOP = async (cyopId, itemType) => {
    try {
      const orderId = cartItems.cart.current_order[0]._id
      console.log('id:', orderId)
      await axios.put(`${BASE_URL}orders/${orderId}/CYOP/${cyopId}`)

      // Fetch updated cart items after successful removal
      await fetchCartItems()

      console.log('Removed item with id:', cyopId)
    } catch (error) {
      console.error('Error removing item', error)
    }
  }

  return (
    <div>
    {props.userData && (
    <div className={`cart-overlay-container ${menuOpen ? 'open' : ''}`}>
      <div className="cart-wrapper">
        <div className="arrow" onClick={toggleCart}>
          Cart
        </div>
        {menuOpen && (
          <div className="menu">
            <ul>
              {cartItems.cart.current_order && (cartItems.cart.current_order.map((currentOrder, key) => (
                <div className='cart-container' key={currentOrder._id}>
                  <div className='cyop-cart'>
                    {currentOrder.custom_pizza && currentOrder.custom_pizza.length > 0 && (
                      <>
                        <h4>Custom Pizza</h4>
                        <li>Base Pizza: {currentOrder.custom_pizza[0].base_pizza.name}</li>
                        <li>Toppings: {currentOrder.custom_pizza[0].toppings.map((topping) => topping.name).join(', ')}</li>
                        <li>Cheeses: {currentOrder.custom_pizza[0].cheeses.map((cheese) => cheese.name).join(', ')}</li>
                        <button className='cart-btn' onClick={() => removeCYOP(currentOrder.custom_pizza[0]._id, 'custom pizza')}>Remove</button>
                      </>
                    )}
                  </div>
                  <div className='sig-cart'>
                    {currentOrder.menu_item && currentOrder.menu_item.length > 0 && (
                      <>
                        <h4>Signature Pizza</h4>
                        <li>Menu Item: {currentOrder.menu_item[0].name}</li>
                        <li>Toppings: {currentOrder.menu_item[0].toppings.map((topping) => topping.name).join(', ')}</li>
                        <button className='cart-btn' onClick={() => removeItem(currentOrder.menu_item[0]._id, 'menu item')}>Remove</button>
                      </>
                    )}
                  </div>
                  <div className='cart-btn-container'>
                    {/* <button onClick= {removeItems}>Remove Items</button> */}
                  </div>
                  <div className='order-cart'>
                    <li><strong>Total Price:</strong> {currentOrder.total_price}</li>
                  </div>
                </div>
              )))}
            </ul>
          </div>
        )}
      </div>
    </div>
    )}
    </div>
  )
}

export default Cart
