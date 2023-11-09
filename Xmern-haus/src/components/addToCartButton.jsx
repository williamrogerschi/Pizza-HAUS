import { BASE_URL } from "../global"
import axios from "axios"

const AddToCart = () => {
    const addToCart = async () => {
        let add = (await axios.put(`${BASE_URL}orders/:id`)).data
        console.log(add)
    }
    return (
        <div className="atc-btn">
            <h1><button className="add-to-cart" onClick={addToCart}></button></h1>
        </div>
    )
}

export default AddToCart