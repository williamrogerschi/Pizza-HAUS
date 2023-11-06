const { Menu } = require('../models/Index');

const getAllMenus = async (req, res) => {
    try {
        const menus = await Menu.find()
        res.json(menus)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneMenu(req, res) {
    try {
        const id = req.params.id
        const menu = await Menu.findById(id)
        if (menu) {
            return res.json(menu)
        }
        return res.status(404).send('The menu with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createNewMenu(req,res) {
    try {
        const menu = await new Menu (req.body)
        await menu.save()
        return res.status(201).json({
            menu
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateMenu(req,res) {
    try {
        const id = req.params.id
        const menu = await Menu.findByIdAndUpdate(id, req.body, {new: true})
        if (order) {
            return res.status(200).json(menu)
        }
        throw new Error('menu not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteMenu(req,res) {
    try {
        const id = req.params.id
        const menu =  await Menu.findByIdAndDelete(id)
        if (menu) {
            return res.status(200).json(menu)
        }
        throw new Error('menu not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllMenus,
    getOneMenu,
    createNewMenu,
    updateMenu,
    deleteMenu
}