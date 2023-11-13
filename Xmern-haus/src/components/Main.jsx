import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Pizza from './Pizza'

import CYOP from './CYOP'
import Footer from './Footer'
import Cart from './Cart'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'
//import components


const Main = () => {

    const [userData, setUserData] = useState(null)
    const [updateUser, setUpdateUser] = useState(null)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
              if (userData != null) {
                console.log('refreshing user data')
                const response = (await axios.get(`${BASE_URL}users/${userData._id}`)).data; 
                setUserData(response);
                console.log(response);

                const order = response.cart.current_order
                let menu_item_cost = 0
                for (let i = 0; i < order.menu_item.length; i++) {
                    menu_item_cost += order.menu_item[i].base_price
                }
                console.log('menu_item_cost', menu_item_cost)
                let custom_item_cost = 0
                for (let i = 0; i < order.custom_pizza.length; i++) {
                    custom_item_cost += 10 + order.custom_pizza[i].toppings.length + order.custom_pizza[i].cheeses.length
                }
                console.log('custom_item_cost', custom_item_cost) 

                const body = {total_price: `$${menu_item_cost + custom_item_cost}`}
                const response2 = await axios.put(`${BASE_URL}orders/${userData.cart.current_order._id}`, body)
                const response3 = (await axios.get(`${BASE_URL}users/${userData._id}`)).data
                setUserData(response3);
              }
              
            } catch (error) {
              console.error("Error fetching user data: ", error);
            }
          };
          
          fetchUserData();

    console.log('userdata updated: ',userData)
      }, [updateUser])

    return (
     <>
    <div className="main">
        <div className='header-container'>
            <Header/>
            <Nav userData={userData} setUserData={setUserData}/>
        </div>
        <Routes>
            <Route path='/' element={<Home userData={userData} setUserData={setUserData}/>}/>
            <Route path='/Pizza' element={<Pizza userData={userData} setUserData={setUserData} setUpdateUser={setUpdateUser}/>}/>
            {/* <Route path='/Drinks/:id' element={<DrinkDetails/>}/> */}
            <Route path='/CYOP' element={<CYOP 
                                            userData={userData} 
                                            setUserData={setUserData}
                                            setUpdateUser={setUpdateUser}/>}/>

        </Routes>
       <Cart userData={userData} setUserData={setUserData} setUpdateUser={setUpdateUser}/>
    </div>
    <Footer/>
    </>
)
}





export default Main


