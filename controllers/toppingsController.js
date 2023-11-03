const { Topping } = require('../models/Index.js')


module.exports = {
    getAllToppings,
}

async function getAllCheeses (req, res) {
    try {
        const toppings = await Topping.find()
        res.status(200).json(toppings)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}
