const db = require('../db/index')

const { Cart, Order, CYOP, Menu } = require('../models/Index')

db.on('error', console.error.bind(console, `MongoDB connection error:`))

const cart = [
    {
        current_order: Order._id
    }
]