const { Order } = require('../models/Index');

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
        res.json(orders)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneOrder(req, res) {
    try {
        const id = req.params.id
        const order = await Order.findById(id)
        if (order) {
            return res.json(order)
        }
        return res.status(404).send('The order with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createNewOrder(req,res) {
    try {
        const order = await new Order (req.body)
        await order.save()
        return res.status(201).json({
            order
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateOrder(req,res) {
    try {
        const id = req.params.id
        const order = await Order.findByIdAndUpdate(id, req.body, {new: true})
        if (order) {
            return res.status(200).json(cart)
        }
        throw new Error('order not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteOrder(req,res) {
    try {
        const id = req.params.id
        const order =  await Order.findByIdAndDelete(id)
        if (order) {
            return res.status(200).json(Order)
        }
        throw new Error('order not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllOrders,
    getOneOrder,
    createNewOrder,
    updateOrder,
    deleteOrder
}