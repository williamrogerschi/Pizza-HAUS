const db = require('../db/index')

const { Cart, Cheese, Menu, Topping, User} = require('../models/Index.js')

db.on('error', console.error.bind(console, `MongoDB connection error:`))

const pizzaNames = [
    "Cheese", "Pepperoni", "Vegetarian", "Hawaiian", "Supreme", "Mushroom", "BBQ Chicken",
    "Meat Lover's", "Veggie Delight", "Cheese", "Pesto", "White Garlic", "Sausage", "Buffalo Chicken",
    "BBQ Bacon", "Four Cheese", "Margarita", "Bacon Ranch", "Pineapple", "Meatball"
  ]
  
//   const toppingsList = [
//     'Canadian Bacon', 'Prosciutto', 'Italian Sausage', 'Bacon', 'Ham', 'Mushrooms', 'Green Peppers',
//     'Onions', 'Black Olives', 'Green Olives', 'Tomatoes', 'Spinach', 'Broccoli', 'Artichoke Hearts',
//     'Red Peppers', 'Pepperoni'
//   ]
  
//   const cheesesList = [
//     'Asiago', 'Mozzarella', 'Parmesan', 'Cheddar', 'Provolone', 'Gouda', 'Fontina', 'Ricotta',
//     'Blue Cheese', 'Gorgonzola'
//   ]

  const pizzaDescriptions = [
    "A cheese pizza",
    "Loaded with pepperoni, tomato sauce, and mozzarella cheese.",
    "A vegetarian delight with various vegetables and mozzarella cheese.",
    "The perfect blend of ham, pineapple, tomato sauce, and mozzarella cheese.",
    "A supreme pizza with pepperoni, Italian sausage, olives, onions, and bell peppers.",
    "Mouthwatering mushrooms, tomato sauce, and mozzarella cheese.",
    "Savory BBQ chicken, red onions, cilantro, tomato sauce, and mozzarella cheese.",
    "For the meat lovers, packed with pepperoni, sausage, bacon, and ham.",
    "A veggie-packed delight with various vegetables and mozzarella cheese.",
    "Simple and delicious with tomato sauce and mozzarella cheese.",
    "A pesto lover's dream with pesto sauce, tomato, and mozzarella cheese.",
    "Delicious white garlic sauce, tomato, and mozzarella cheese.",
    "Sausage lovers unite with tomato sauce and mozzarella cheese.",
    "Spicy buffalo chicken, red onions, cilantro, tomato sauce, and mozzarella cheese.",
    "BBQ bacon goodness with red onions, cilantro, tomato sauce, and mozzarella cheese.",
    "A four-cheese delight with tomato sauce, mozzarella, Parmesan, Romano, and Asiago cheeses.",
    "A classic Margherita pizza with tomato, mozzarella, and basil.",
    "A flavorful combination of bacon, ranch dressing, red onions, cilantro, tomato sauce, and mozzarella cheese.",
    "Hawaiian delight with pineapple, ham, tomato sauce, and mozzarella cheese.",
    "Delicious meatballs, red onions, cilantro, tomato sauce, and mozzarella cheese."
  ]

  let cheeses = []
  async function getCheeses() {
    return await Cheese.find()
  }
  

  let toppings = []
  async function getToppings() {
    return await Topping.find()
  } 

  async function getRandomToppings() {
    const toppingsList = [];
    while (toppingsList.length < 3) {
      const randomIndex = Math.floor(Math.random() * toppings.length);
      const topping = toppings[randomIndex]._id;
      if (!toppings.includes(topping)) {
        toppings.push(topping);
      }
    }
    return toppings;
  }

  async function getRandomCheeses() {
    const cheesesList = [];
    while (cheesesList.length < 2) {
      const randomIndex = Math.floor(Math.random() * cheeses.length);    
      const cheese = cheeses[randomIndex]._id;
      if (!cheesesList.includes(cheese)) {
        cheesesList.push(cheese);
      }
    }
    return cheeses;
  }
  
  const createAndSavePizza = async () => {      

    const pizzaMenu = []
    for (let i = 0; i < 20; i++) {
        const pizza = {
        name: pizzaNames[i],
        description: pizzaDescriptions[i],
        base_price: 10 + i,   
        cheeses: await getRandomCheeses(),
        toppings: getRandomToppings(),
        image: `${pizzaNames[i].toLowerCase()}.jpg`
        }
        pizzaMenu.push(pizza);
    }
    console.log(pizzaMenu)
    await Menu.insertMany(pizzaMenu)
    console.log('created!')
  }

  const main = async () => {
    cheeses = await getCheeses()
    toppings = await getToppings()
    
    await createAndSavePizza()
    db.close()
    console.log('created')
  }

  main()
  
