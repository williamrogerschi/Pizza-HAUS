const db = require('../db/index')

const { Cart, Cheese, Menu, Topping, User} = require('../models/Index.js')

db.on('error', console.error.bind(console, `MongoDB connection error:`))


const pizzaToppings = [
    {
        name: 'Pepperoni'
    }
]