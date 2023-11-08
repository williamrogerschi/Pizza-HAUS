const { User, Cart } = require('../models/Index');


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneUser(req, res) {
    try {
        const id = req.params.id
        const user = await User.findById(id)
            .populate({
                path: 'cart',
                populate: {
                    path: 'current_order',
                    model: 'Order',
                    populate: {
                        path: 'menu_item',
                        model: 'Menu',
                        populate: [{
                            path: 'cheeses',
                            model: 'Cheese',
                        },
                        {
                            path: 'toppings',
                            model: 'Toppings'
                        }
                        ]
                    }
                }
            })
            .populate({
                path: 'cart',
                populate: {
                    path: 'current_order',
                    model: 'Order',
                    populate: [{
                        path: 'custom_pizza',
                        model: 'Menu',
                        populate: [{
                            path: 'cheeses',
                            model: 'Cheese',
                        },
                        {
                            path: 'toppings',
                            model: 'Toppings'
                        },
                        {
                            path: 'base_pizza',
                            model: 'Menu',
                        }
                        ]
                    }]
                }
            })
            .exec()
        if (user) {
            return res.json(user)
        }
        return res.status(404).send('The user with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createNewUser(req, res) {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user
        })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}


async function updateUser(req, res) {
    try {
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error('user not found')
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function deleteUser(req, res) {
    try {
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error('user not found')
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}


module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser
}