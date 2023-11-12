// import { useEffect, useState } from "react"
// import { BASE_URL } from "../global"
// import axios from "axios"

// const AddToCart = (props) => {

//     const addToCart = async () => {
//         let add = (await axios.put(`${BASE_URL}/orders/654d2fd5e6892520b4d9537c/menuItem/${props.itemId}`)).data
//         console.log(add)
//     }
//     return (
//         <div className="atc-btn">
//             <h1><button className="add-to-cart" onClick={addToCart}></button></h1>
//         </div>
//     )
// }

// export default AddToCart