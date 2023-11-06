const { Cheese } = require('../models/Index');

const getAllCheeses = async (req, res) => {
    try {
        const cheeses = await Cheese.find()
        res.json(cheeses)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneCheese(req, res) {
    try {
        const id = req.params.id
        const cheese = await Cheese.findById(id)
        if (cheese) {
            return res.json(cheese)
        }
        return res.status(404).send('The cheese with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createNewCheese(req,res) {
    try {
        const cheese = await new Cheese (req.body)
        await cheese.save()
        return res.status(201).json({
            cheese
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateCheese(req,res) {
    try {
        const id = req.params.id
        const cheese = await Cheese.findByIdAndUpdate(id, req.body, {new: true})
        if (cheese) {
            return res.status(200).json(cart)
        }
        throw new Error('Cheese not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteCheese(req,res) {
    try {
        const id = req.params.id
        const cheese =  await Cheese.findByIdAndDelete(id)
        if (cheese) {
            return res.status(200).json(Cheese)
        }
        throw new Error('Cheese not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllCheeses,
    getOneCheese,
    createNewCheese,
    updateCheese,
    deleteCheese
}