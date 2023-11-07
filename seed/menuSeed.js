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
    "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    "https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8aGNlL2hmZC8xNTk2ODYyNTc4NjkxMC5qcGd8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA",
    "https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven.png?w=1200&ssl=1",
    "https://img.kidspot.com.au/pZnR2nZu/kk/2015/03/hawaiian-pizza-recipe-605894-2.jpg",
    "https://www.southernliving.com/thmb/UuflED14dkNrrm-TFbkz42Z5mRg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sl_supremepizza_00072-2000-4cab71bd67774233b45f05e4e32fdfde.jpg",
    "https://www.allrecipes.com/thmb/Xa5l3p_3XZdSqqYkODRhybDaIOA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/36107allies-mushroom-pizzafabeveryday4x3-005f809371b147378094d60f28daf212.jpg",
    "https://www.lowcarbmaven.com/wp-content/uploads/2018/02/BBQ-chicken-crust-pizza-3-500x500.jpg", // Actual URL for BBQ Chicken
    "https://halo-pg.com/wp-content/uploads/2021/10/Ultimate-Stuffed-Meatlovers-Pizza-1.jpg", // Actual URL for Meat Lover's
    "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photosV2/4708862d-793d-4c14-9a69-6a3ae6de4c67-retina-large.jpg",
    "https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Fennel_Cauliflower_Pizza_014_kjcbr0.jpg", // Actual URL for Pesto
    "https://www.killingthyme.net/wp-content/uploads/2021/03/herb-and-garlic-cheese-pizza-0004-768x1152.jpg",
    "https://www.tasteofhome.com/wp-content/uploads/0001/01/The-Best-Sausage-Pizzas_EXPS_TOHFM20_245369-_E09_26_4b.jpg?fit=700%2C1024",
    "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/23/1/FN_buffalo-pizza-008_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1384540642451.jpeg",
    "https://www.effortlessfoodie.com/wp-content/uploads/2022/04/bbq-chicken-bacon-pizza-5.jpg",
    "https://www.insidetherustickitchen.com/wp-content/uploads/2020/07/Quattro-Formaggi-1200px-Inside-the-Rustic-Kitchen-2.jpg",
    "https://eu.ooni.com/cdn/shop/articles/20220211142754-margherita-9920.jpg?crop=center&height=800&v=1644590277&width=800", // Actual URL for Margarita
    "https://i2.wp.com/bakingmischief.com/wp-content/uploads/2022/03/chicken-bacon-ranch-pizza-image-683x1024.jpg",
    "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/7762e80e80346b5d41abe2c65e2cf482.jpg",
    "https://myfoodbook.com.au/sites/default/files/styles/card_c_wd_wp/public/recipe_photo/Meatball_Pizza_Recipe.jpg",
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

  module.exports = async function menuSeed() {
    cheeses = await getCheeses()
    toppings = await getToppings()
    // console.log(cheeses)
    // console.log(toppings)
    
    await createAndSavePizza()
    // db.close()
    console.log('created')
  }

//   main()
  
