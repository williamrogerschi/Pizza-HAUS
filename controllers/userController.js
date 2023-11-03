const { User } = require('../models/Index.js')

module.exports = {
    getAllUsers,
}

async function getAllUsers (req, res) {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}