const db = require('../db/index')

const { Topping } = require('../models/Index.js')

db.on('error', console.error.bind(console, `MongoDB connection error:`))


const pizzaToppings = [
    {
        name: 'Pepperoni',
        type: 'Meat',
    },
    {
        name: 'Canadian Bacon',
        type: 'Meat',
      },
      {
        name: 'Prosciutto',
        type: 'Meat',
      },
      {
        name: 'Italian Sausage',
        type: 'Meat',
      },
      {
        name: 'Bacon',
        type: 'Meat',
      },
      {
        name: 'Ham',
        type: 'Meat',
      },
      {
        name: 'Mushrooms',
        type: 'Veggie',
      },
      {
        name: 'Green Peppers',
        type: 'Veggie',
      },
      {
        name: 'Onions',
        type: 'Veggie',
      },
      {
        name: 'Black Olives',
        type: 'Veggie',
      },
      {
        name: 'Green Olives',
        type: 'Veggie',
      },
      {
        name: 'Tomatoes',
        type: 'Veggie',
      },
      {
        name: 'Spinach',
        type: 'Veggie',
      },
      {
        name: 'Broccoli',
        type: 'Veggie',
      },
      {
        name: 'Artichoke Hearts',
        type: 'Veggie',
      },
      {
        name: 'Red Peppers',
        type: 'Veggie',
      },
]

const createAndSaveToppings = async (name, type) => {
    const newTopping = new Topping({ name, type })
    await newTopping.save()
}

const main = async () => {
    for (const toppings of pizzaToppings) {
        await createAndSaveToppings(toppings.name, toppings.type)
    }
    db.close()
}
main()