
// import React, { useEffect, useState } from 'react';
// import { BASE_URL } from '../global';
// import axios from 'axios';
// import './Cart.css';

// const Cart = () => {

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

//   const toggleCart = () => {
//     setMenuOpen(!menuOpen);
//   }

//   useEffect(() => {
//     const getItems = async () => {
//       if (menuOpen) {
//         try {
//           const response = await axios.get(`${BASE_URL}orders/`)
//           setCartItems(response.data);
//           console.log(response.data)
//         } catch (error) {
//           console.error('Error grabbing cart items', error);
//         }
//       }
//     }
//     getItems();
//   }, [menuOpen]);

//   return (
//     <div className={`cart-overlay-container ${menuOpen ? 'open' : ''}`}>
//       <div className="cart-wrapper">
//         <div className="arrow" onClick={toggleCart}>
//           Cart
//         </div>
//         {menuOpen && (
//           <div className="menu">
//             <ul>
//               {cartItems.map((cartItem, key) => (
//                 <li key={cartItem.custom_pizza}>{cartItem.custom_pizza}</li>
//               ))}
//             </ul>  
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cart;


// version that actually works ish 
// import React, { useEffect, useState } from 'react';
// import { BASE_URL } from '../global';
// import axios from 'axios';
// import './Cart.css';

// const Cart = () => {
//   let userId = '654a865a319f1ce8cd6423fa'
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);


//   const toggleCart = () => {
//     setMenuOpen(!menuOpen);
//   }

//   useEffect(() => {
//     const getItems = async () => {
//       if (menuOpen) {
//         try {
//           const response = await axios.get(`${BASE_URL}orders/`);
//           setCartItems(response.data);
//           console.log(response.data);
//         } catch (error) {
//           console.error('Error grabbing cart items', error);
//         }
//       }
//     }
//     getItems();
//   }, [menuOpen]);

//   return (
//     <div className={`cart-overlay-container ${menuOpen ? 'open' : ''}`}>
//       <div className="cart-wrapper">
//         <div className="arrow" onClick={toggleCart}>
//           Cart
//         </div>
//         {menuOpen && (
//           <div className="menu">
//             <ul>
//               {cartItems.map((cartItem, key) => (
//                 <li key={cartItem._id}>
//                   {cartItem.custom_pizza.map((pizza, pizzaKey) => (
//                     <div key={pizzaKey}>
//                       Base Pizza: {pizza.base_pizza}
//                       Toppings: {pizza.toppings.join(', ')}
//                       Cheeses: {pizza.cheeses.join(', ')}
//                     </div>
//                   ))}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cart;



// version where we're trying to get user to work
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../global';
import axios from 'axios';
import './Cart.css';

const Cart = () => {
  let userId = '654ce855019badf387ee03a2';
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState({ cart: { current_order: [] } });

  const toggleCart = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    const getItems = async () => {
      if (menuOpen) {
        try {
          const response = await axios.get(`${BASE_URL}users/${userId}`);
          setCartItems(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error grabbing cart items', error);
        }
      }
    }
    getItems();
  }, [menuOpen]);

  return (
    <div className={`cart-overlay-container ${menuOpen ? 'open' : ''}`}>
      <div className="cart-wrapper">
        <div className="arrow" onClick={toggleCart}>
          Cart
        </div>
        {menuOpen && (
          <div className="menu">
            <ul>
              {cartItems.cart.current_order.map((currentOrder, key) => (
                <li key={currentOrder._id}>
                  <div>
                    <h4>Custom Pizza</h4>
                    Base Pizza: {currentOrder.custom_pizza[0].base_pizza.name}
                    Toppings: {currentOrder.custom_pizza[0].toppings.map((topping) => topping.name).join(', ')}
                    Cheeses: {currentOrder.custom_pizza[0].cheeses.map((cheese) => cheese.name).join(', ')}
                  </div>
                  <div>
                    <h4>Signature Pizza</h4>
                    Menu Item: {currentOrder.menu_item[0].name}
                    {/* Toppings: {currentOrder.menu_item[0].toppings} */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

