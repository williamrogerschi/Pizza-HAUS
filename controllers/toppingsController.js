const { Toppings } = require('../models/Index');

const getAllToppings = async (req, res) => {
    try {
        const toppings = await Toppings.find()
        res.json(toppings)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneTopping(req, res) {
    try {
        const id = req.params.id
        const topping = await Toppings.findById(id)
        if (topping) {
            return res.json(user)
        }
        return res.status(404).send('The topping with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createNewTopping(req,res) {
    try {
        const topping = await new Toppings (req.body)
        await topping.save()
        return res.status(201).json({
            topping
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateTopping(req,res) {
    try {
        const id = req.params.id
        const topping = await Toppings.findByIdAndUpdate(id, req.body, {new: true})
        if (topping) {
            return res.status(200).json(topping)
        }
        throw new Error('topping not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteTopping(req,res) {
    try {
        const id = req.params.id
        const topping =  await Toppings.findByIdAndDelete(id)
        if (topping) {
            return res.status(200).json(topping)
        }
        throw new Error('topping not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllToppings,
    getOneTopping,
    createNewTopping,
    updateTopping,
    deleteTopping
}