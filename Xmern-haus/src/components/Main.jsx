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
    // const [cartItems, setCartItems] = useState({ cart: { current_order: {} } })


    useEffect(() => {
    //     console.log('main use effect' )
    //     // const user = "User1"
    //     if (userData != null) {
    //     const findUserInfo = async () => {
    //       let users = (await axios.get(`${BASE_URL}users`)).data
    //       for (let i = 0; i < users.length; i++) {
    //         if (user == users[i].user_name) {
    //             setUserData(users[i])
    //             console.log(users[i])
    //             break;
    //         } else {
    //             console.log('user not found')
    //         }
    //       }
          
    //     };
    //     findUserInfo();
    // }
    console.log('userdata updated: ',userData)
      }, [userData]);

    return (
     <>
    <div className="main">
        <div className='header-container'>
            <Header/>
            <Nav userData={userData} setUserData={setUserData}/>
        </div>
        <Routes>
            <Route path='/' element={<Home userData={userData} setUserData={setUserData}/>}/>
            <Route path='/Pizza' element={<Pizza userData={userData} setUserData={setUserData}/>}/>
            {/* <Route path='/Drinks/:id' element={<DrinkDetails/>}/> */}
            <Route path='/CYOP' element={<CYOP userData={userData} setUserData={setUserData}/>}/>

        </Routes>
       <Cart userData={userData} setUserData={setUserData}/>
    </div>
    <Footer/>
    </>
)
}





export default Main


