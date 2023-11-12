const { Order, Menu } = require('../models/Index');

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

async function addSignatureItemToOrder(req, res) {
    try {
        const id = req.params.id
        const order = await Order.findById(id)
        console.log(req)
        console.log(req.body.order_id)
        const menuItem = await Menu.findById(req.body.order_id)
        
        
        order.menu_item.push(menuItem)
        order.save()

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
            return res.status(200).json(order)
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

async function getMenuItem(req, res) {
    try {
        const orderId = req.params.orderId
        const menuId = req.params.menuId
        const order = await Order.findById(orderId)

        if (!order) {
            throw new Error('Order not found')
        }

        const menuItem = order.menu_item.find(item => {
            if (order.menu_item && order.menu_item[0]._id.toString() === menuId) {
                return true
            }
            return false
        })

        if (menuItem) {
            return res.status(200).json(menuItem)
        }
        throw new Error('Menu item not found in the order')
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getCYOP(req, res) {
    try {
        const orderId = req.params.orderId
        const cyopId = req.params.cyopId
        const order = await Order.findById(orderId)

        if (!order) {
            throw new Error('Order not found')
        }

        const cyopItem = order.custom_pizza.find(item => {
            if (order.custom_pizza && order.custom_pizza[0]._id.toString() === cyopId) {
                return true
            }
            return false
        })

        if (cyopItem) {
            return res.status(200).json(cyopItem)
        }
        throw new Error('Menu item not found in the order')
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function removeItemFromOrder(req, res) {
    try {
        const orderId = req.params.orderId
        const menuId = req.params.menuId
        const order = await Order.findById(orderId)

        if (!order) {
            throw new Error('Order not found')
        }

        // Filter out the menu item with the specified menuId
        order.menu_item = order.menu_item.filter(item => item._id.toString() !== menuId)

        // Save the updated order
        await order.save()

        res.status(200).json({ message: 'Item removed from order' })
    } catch (error) {
        console.error('Error removing item from order', error)
        res.status(500).json({ error: error.message })
    }
}


async function removeCYOPFromOrder(req, res) {
    try {
        const orderId = req.params.orderId
        const cyopId = req.params.cyopId
        const order = await Order.findById(orderId)

        if (!order) {
            throw new Error('Order not found')
        }

        order.custom_pizza = order.custom_pizza.filter(item => item._id.toString() !== cyopId)
        await order.save()

        res.status(200).json({ message: 'Item removed from order' })
    } catch (error) {
        console.error('Error removing item from order', error)
        res.status(500).json({ error: error.message })
    }
}




module.exports = {
    getAllOrders,
    getOneOrder,
    createNewOrder,
    updateOrder,
    deleteOrder,
    addSignatureItemToOrder,
    removeItemFromOrder,
    removeCYOPFromOrder,
    getMenuItem,
    getCYOP
}