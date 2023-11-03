const { Cart } = require('../models/Index.js')

module.exports = {
    getAllCarts,
}

async function getAllCarts (req, res) {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}