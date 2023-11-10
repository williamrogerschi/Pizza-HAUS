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

const getUserCart = async (userId) => {
    try {
      const userCart = await Cart.findOne({ userId })
      return userCart
    } catch (error) {
      console.error('Error getting user cart:', error);
    }
  }


async function updateUserCart (req, res) {
    try {
        const currentCart = await Cart.findOne({ userId: userCart.userId })
        if(!currentCart) {
            const newCart = await new Cart (req.body)
            await newCart.save()
            return res.status(201).json({
                newCart
            })
        } else {
            currentCart.current_order = userCart.cart.current_order
            await currentCart.save()
        }
    } catch (error) {
        console.error('Error updating cart', error)
    }
}


module.exports = {
    getAllCarts,
    getOneCart,
    createNewCart,
    updateCart,
    deleteCart,
    getUserCart,
    updateUserCart,
}