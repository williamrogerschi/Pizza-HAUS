const { Cart } = require('../models/Index');

const getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find()
        res.json(carts)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneCart(req, res) {
    try {
        const id = req.params.id
        const cart = await Cart.findById(id)
        if (cart) {
            return res.json(cart)
        }
        return res.status(404).send('Cart with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createNewCart(req,res) {
    try {
        const cart = await new Cart (req.body)
        await cart.save()
        return res.status(201).json({
            cart
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateCart(req,res) {
    try {
        const id = req.params.id
        const cart = await Cart.findByIdAndUpdate(id, req.body, {new: true})
        if (cart) {
            return res.status(200).json(cart)
        }
        throw new Error('Cart not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteCart(req,res) {
    try {
        const id = req.params.id
        const cart =  await Cart.findByIdAndDelete(id)
        if (cart) {
            return res.status(200).json(Cart)
        }
        throw new Error('Cart not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllCarts,
    getOneCart,
    createNewCart,
    updateCart,
    deleteCart
}