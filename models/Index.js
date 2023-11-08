const mongoose = require('mongoose')
const cartSchema = require('./Cart.js')
const cheeseSchema = require('./Cheese.js')
const menuSchema = require('./Menu.js')
const toppingSchema = require('./Toppings.js')
const userSchema = require('./User.js')
const orderSchema = require('./Order.js')

const Cart = mongoose.model('Cart', cartSchema)
const Cheese = mongoose.model('Cheese', cheeseSchema)
const Menu = mongoose.model('Menu', menuSchema)
const Toppings = mongoose.model('Toppings', toppingSchema)
const User = mongoose.model('User', userSchema)
const Order = mongoose.model('Order', orderSchema)

module.exports = {
    Cart,
    Cheese,
    Menu,
    Toppings,
    User,
    Order
}
