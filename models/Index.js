const mongoose = require('mongoose')
const cartSchema = require('./Cart.js')
const cheeseSchema = require('./Cheese.js')
const menuSchema = require('./Menu.js')
const toppingSchema = require('./Toppings.js')
const userSchema = require('./User.js')
const orderSchema = require('./Order.js')

const Cart = mongoose.model('cart', cartSchema)
const Cheese = mongoose.model('cheese', cheeseSchema)
const Menu = mongoose.model('menu', menuSchema)
const Topping = mongoose.model('topping', toppingSchema)
const User = mongoose.model('user', userSchema)
const Order = mongoose.model('order', orderSchema)

module.exports = {
    Cart,
    Cheese,
    Menu,
    Topping,
    User,
    Order
}
