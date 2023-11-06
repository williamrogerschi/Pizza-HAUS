const db = require('../db/index')

const { Cart, Cheese, Menu, Topping, User} = require('../models/Index.js')

db.on('error', console.error.bind(console, `MongoDB connection error:`))

const pizzaNames = [
    "Cheese", "Pepperoni", "Vegetarian", "Hawaiian", "Supreme", "Mushroom", "BBQ Chicken",
    "Meat Lover's", "Veggie Delight", "Pesto", "White Garlic", "Sausage", "Buffalo Chicken",
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
    "Simple and delicious with tomato sauce and mozzarella cheese.",
    "Loaded with pepperoni, tomato sauce, and mozzarella cheese.",
    "A vegetarian delight with various vegetables and mozzarella cheese.",
    "The perfect blend of ham, pineapple, tomato sauce, and mozzarella cheese.",
    "A supreme pizza with pepperoni, Italian sausage, olives, onions, and bell peppers.",
    "Mouthwatering mushrooms, tomato sauce, and mozzarella cheese.",
    "Savory BBQ chicken, red onions, cilantro, tomato sauce, and mozzarella cheese.",
    "For the meat lovers, packed with pepperoni, sausage, bacon, and ham.",
    "A veggie-packed delight with various vegetables and mozzarella cheese.",   
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

  const pizzaImages = [
    "https://www.foodandwine.com/thmb/bT5-sIRTEMDImFAqBmEAzG5T5A4=/1500x0/filters:no_upscal[…]se-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    "https://www.simplyrecipes.com/thmb/X2B0QCVdGJWGO1gW6GR7cz1rhe0=/750x0/filters:no_upscal[…]epperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
    "https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven.png?w=1200&ssl=1",
    "https://img.kidspot.com.au/pZnR2nZu/kk/2015/03/hawaiian-pizza-recipe-605894-2.jpg",
    "https://www.southernliving.com/thmb/UuflED14dkNrrm-TFbkz42Z5mRg=/1500x0/filters:no_upsca[…]remepizza_00072-2000-4cab71bd67774233b45f05e4e32fdfde.jpg",
    "https://www.southernliving.com/thmb/UuflED14dkNrrm-TFbkz42Z5mRg=/1500x0/filters:no_upsca[…]remepizza_00072-2000-4cab71bd67774233b45f05e4e32fdfde.jpg",
    "https://www.lowcarbmaven.com/wp-content/uploads/2018/02/BBQ-chicken-crust-pizza-3-500x500.jpg", // Actual URL for BBQ Chicken
    "https://halo-pg.com/wp-content/uploads/2021/10/Ultimate-Stuffed-Meatlovers-Pizza-1.jpg", // Actual URL for Meat Lover's
    "https://www.southernliving.com/thmb/UuflED14dkNrrm-TFbkz42Z5mRg=/1500x0/filters:no_upsca[…]remepizza_00072-2000-4cab71bd67774233b45f05e4e32fdfde.jpg",
    "https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Fennel_Cauliflower_Pizza_014_kjcbr0.jpg", // Actual URL for Pesto
    "https://www.southernliving.com/thmb/UuflED14dkNrrm-TFbkz42Z5mRg=/1500x0/filters:no_upsca[…]remepizza_00072-2000-4cab71bd67774233b45f05e4e32fdfde.jpg",
    "https://www.southernliving.com/thmb/UuflED14dkNrrm-TFbkz42Z5mRg=/1500x0/filters:no_upsca[…]remepizza_00072-2000-4cab71bd67774233b45f05e4e32fdfde.jpg",
    "https://www.southernliving.com/thmb/UuflED14dkNrrm-TFbkz42Z5mRg=/1500x0/filters:no_upsca[…]remepizza_00072-2000-4cab71bd67774233b45f05e4e32fdfde.jpg",
    "https://www.southernliving.com/thmb/UuflED14dkNrrm-TFbkz42Z5mRg=/1500x0/filters:no_upsca[…]remepizza_00072-2000-4cab71bd67774233b45f05e4e32fdfde.jpg",
    "https://www.southernliving.com/thmb/UuflED14dkNrrm-TFbkz42Z5mRg=/1500x0/filters:no_upsca[…]remepizza_00072-2000-4cab71bd67774233b45f05e4e32fdfde.jpg",
    "https://eu.ooni.com/cdn/shop/articles/20220211142754-margherita-9920.jpg?crop=center&height=800&v=1644590277&width=800", // Actual URL for Margarita
    "https://www.southernliving.com/thmb/UuflED14dkNrrm-TFbkz42Z5mRg=/1500x0/filters:no_upsca[…]remepizza_00072-2000-4cab71bd67774233b45f05e4e32fdfde.jpg",
    "https://www.southernliving.com/thmb/UuflED14dkNrrm-TFbkz42Z5mRg=/1500x0/filters:no_upsca[…]remepizza_00072-2000-4cab71bd67774233b45f05e4e32fdfde.jpg",
    "https://www.southernliving.com/thmb/UuflED14dkNrrm-TFbkz42Z5mRg=/1500x0/filters:no_upsca[…]remepizza_00072-2000-4cab71bd67774233b45f05e4e32fdfde.jpg",
  ];


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
      if (!toppingsList.includes(topping)) {
        toppingsList.push(topping);
      }
    }
    return toppingsList;
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
    return cheesesList;
  }
  
  const createAndSavePizza = async () => {      

    const pizzaMenu = []
    for (let i = 0; i < 19; i++) {
        const pizza = {
        name: pizzaNames[i],
        description: pizzaDescriptions[i],
        base_price: 10 + i,   
        cheeses: await getRandomCheeses(),
        toppings: await getRandomToppings(),
        image: pizzaImages[i]
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
    // console.log(cheeses)
    // console.log(toppings)
    
    await createAndSavePizza()
    db.close()
    console.log('created')
  }

  main()
  
