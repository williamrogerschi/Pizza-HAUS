const db = require('../db/index')

const { Menu, Topping, Cheese, Order } = require('../models/Index')

db.on('error', console.error.bind(console, `MongoDB connection error:`))

const menu_info = Menu.find() 
const toppings_info = Topping.find()
const cheese_info = Cheese.find()
const order_info = Order.find()

const findMenuItemByName = async (pizzaName) => {
    return (await Menu.find({name:pizzaName}))._id
}

const findToppingItemByName = async (toppingName) => {
    return (await Order.find({name:toppingName}))._id
}

const findCheesebyName = async (cheeseName) => {
    return (await Cheese.find({name:cheeseName}))._id
    }

const orders = [
    {
        menu_item: [await findMenuItemByName("Pesto"),await findMenuItemByName("Cheese")],
        custom_pizza: [{
            base_pizza: await findMenuItemByName("Cheese"),
            toppings: [await findToppingItemByName("pepperoni"),await findToppingItemByName("bacon"),await findToppingItemByName("Italian Sausage")],
            cheeses: await findCheesebyName("asiago")
        }],
        total_price: "$58"
    },
    {
        menu_item: [await findMenuItemByName("Margarita")],
        custom_pizza: [{
          base_pizza: await findMenuItemByName("Margarita"),
          toppings: [await findToppingItemByName("ham")],
          cheeses: await findCheesebyName("mozzarella")
        }],
        total_price: "$24"
      }
]


const createAndSaveOrder = async (menu_item, custom_pizza, total_price) => {
    const newOrder = new Order({ menu_item, custom_pizza, total_price })
    await newOrder.save()
}

const main = async () => {
    for (const order of orders) {
        await createAndSaveOrder(order.menu_item, order.custom_pizza, order.total_price)
    }
    db.close()
}
main()