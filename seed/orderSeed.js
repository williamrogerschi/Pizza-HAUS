const db = require('../db/index')

const { Menu, Topping, Cheese, Order } = require('../models/Index')

db.on('error', console.error.bind(console, `MongoDB connection error:`))

// const menu_info = Menu.find() 
// const toppings_info = Topping.find()
// const cheese_info = Cheese.find()
// const order_info = Order.find()

const findMenuItemByName = async (pizzaName) => {
    return (await Menu.findOne({name:pizzaName}))._id
}

const findToppingItemByName = async (toppingName) => {
    console.log(toppingName)
    console.log((await Topping.findOne({name:toppingName})))
    return (await Topping.findOne({name:toppingName}))._id
}

const findCheesebyName = async (cheeseName) => {
    console.log((await Cheese.findOne({name: cheeseName})._id))
    console.log(cheeseName)
    return (await Cheese.findOne({name:cheeseName}))._id
    }

const createAndSaveOrder = async (menu_item, custom_pizza, total_price) => {
    const newOrder = new Order({ menu_item, custom_pizza, total_price })
    await newOrder.save()
}

module.exports = async function orderSeed() {
    const orders = [
        {
            menu_item: await findMenuItemByName("Pesto"),
            custom_pizza: [{
                base_pizza: await findMenuItemByName("Cheese"),
                toppings: [await findToppingItemByName("Pepperoni"),await findToppingItemByName("Bacon"),await findToppingItemByName("Italian Sausage")],
                cheeses: await findCheesebyName("Asiago")
            }],
            total_price: "$58"
        },
        {
            menu_item: [await findMenuItemByName("Margarita")],
            custom_pizza: [{
              base_pizza: await findMenuItemByName("Margarita"),
              toppings: [await findToppingItemByName("Ham")],
              cheeses: await findCheesebyName("Mozzarella")
            }],
            total_price: "$24"
          }
    ]
    
    for (const order of orders) {
        await createAndSaveOrder(order.menu_item, order.custom_pizza, order.total_price)
    }
    // db.close()
}
// main()