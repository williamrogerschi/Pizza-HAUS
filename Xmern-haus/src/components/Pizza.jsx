import { BASE_URL } from '../global'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Pizza = () => {
    

        const [pizza, setPizza] = useState([])

        useEffect(() => {
            const getPizzas = async () => {
                const response = await axios.get(`${BASE_URL}menus/`)
                setPizza(response.data)
                console.log(response)
            }
            getPizzas()
        }, [])
    

        return (
        <div className="pizza-container">
            <div className='pizza-header'>
                <h1> P  I  Z  Z  A  S </h1>
            </div>
            <div className='pizza-map'>
                {pizza.map((pizzaItem, key) => (
                    <Link key={pizzaItem._id} to={`/menus/${pizzaItem._id}`}>
                        <div className='pizza-card'>
                            <img className='pizza-card-image' src={pizzaItem.image} alt={pizzaItem.name}/>
                            <h4>{pizzaItem.name} ${pizzaItem.base_price}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Pizza