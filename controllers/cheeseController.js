const { Cheese } = require('../models/Index.js')


module.exports = {
    getAllCheeses,
}

async function getAllCheeses (req, res) {
    try {
        const cheeses = await Cheese.find()
        res.status(200).json(cheeses)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}
