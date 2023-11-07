const db = require('../db/index')

const { Cart, Cheese, Menu, Topping, User, Order } = require('../models/Index.js')

db.on('error', console.error.bind(console, `MongoDB connection error:`))

module.exports = async function cartSeed() {
    const orders = await Order.find()
    let carts = []
    for (let i = 0; i < orders.length; i++) {
        carts.push({ current_order: orders[i]._id })
    }
    console.log(carts)
    await Cart.insertMany(carts)

    // db.close()
    console.log('Created Orders')
}

// main()
