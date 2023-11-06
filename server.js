const express = require('express')
const db = require('./db')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

//show route controllers
const cheeseController = require('./controllers/cheeseController')
const toppingController = require('./controllers/toppingsController')
const cartController = require('./controllers/cartController')
const menuController = require('./controllers/menuController')
const orderController = require('./controllers/orderController')
const userController = require('./controllers/userController')

const PORT = process.env.PORT || 3001


//middleware
const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())



//show routes
app.get('/', (req, res) => res.send('This is root'))

//Cart Routes
app.get('/carts/', cartController.getAllCarts)
app.get('/carts/:id', cartController.getOneCart)
app.post('/carts/', cartController.createNewCart)
app.put('/carts/:id', cartController.updateCart)
app.delete('/carts/:id', cartController.deleteCart)

//Cheese Routes
app.get('/cheeses/', cheeseController.getAllCheeses)
app.get('/cheeses/:id', cheeseController.getOneCheese)
app.post('/cheeses/', cheeseController.createNewCheese)
app.put('/cheeses/:id', cheeseController.updateCheese)
app.delete('/cheeses/:id', cheeseController.deleteCheese)

//Menus Routes
app.get('/menus/', menuController.getAllMenus)
app.get('/menus/:id', menuController.getOneMenu)
app.post('/menus/', menuController.createNewMenu)
app.put('/menus/:id', menuController.updateMenu)
app.delete('/menus/:id', menuController.deleteMenu)


//Orders Routes
app.get('/orders/', orderController.getAllOrders)
app.get('/orders/:id', orderController.getOneOrder)
app.post('/orders/', orderController.createNewOrder)
app.put('/orders/:id', orderController.updateOrder)
app.delete('/orders/:id', orderController.deleteOrder)

//Toppings Routes
app.get('/toppings/', toppingController.getAllToppings)
app.get('/toppings/:id', toppingController.getOneTopping)
app.post('/toppings/', toppingController.createNewTopping)
app.put('/toppings/:id', toppingController.updateTopping)
app.delete('/toppings/:id', toppingController.deleteTopping)

//Users Routes
app.get('/users/', userController.getAllUsers)
app.get('/users/:id', userController.getOneUser)
app.post('/users/', userController.createNewUser)
app.put('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))