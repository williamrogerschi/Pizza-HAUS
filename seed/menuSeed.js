const db = require('../db/index')

const { Cart, Cheese, Menu, Toppings, User} = require('../models/Index.js')

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
    "https://santabarbarabaker.com/wp-content/uploads/2020/07/IMG_2431.jpg",
    "https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven.png?w=1200&ssl=1",
    "https://cupcakesandkalechips.com/wp-content/uploads/2021/04/Gluten-Free-Pineapple-Pizza-500x500.jpg",
    "https://cdn11.bigcommerce.com/s-vm6doh2w4n/images/stencil/original/products/8314/20588/brenbwklcajlem2t90lo__49662.1677143112.jpg?c=1",
    "https://santabarbarabaker.com/wp-content/uploads/2020/09/IMG_3995-1.jpg",
    "https://www.lowcarbmaven.com/wp-content/uploads/2018/02/BBQ-chicken-crust-pizza-3-500x500.jpg", // Actual URL for BBQ Chicken
    "https://eathoneyspotpizza.com/wp-content/uploads/2023/04/Meat-Special-Pizza.png", // Actual URL for Meat Lover's
    "https://theyummybowl.com/wp-content/uploads/VEGETARIAN-PIZZA-GF-REC.jpg",
    "https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Fennel_Cauliflower_Pizza_014_kjcbr0.jpg", // Actual URL for Pesto
    "https://images.squarespace-cdn.com/content/v1/64aed32c3fd84666887b8df1/1f643e47-24ff-45b3-9627-f8a6311b1c69/357370911_2237861156413686_7715237199015673461_n.jpg?format=2500w",
    "https://www.tasteofhome.com/wp-content/uploads/0001/01/The-Best-Sausage-Pizzas_EXPS_TOHFM20_245369-_E09_26_4b.jpg?fit=700%2C1024",
    "https://embed.widencdn.net/img/mccormick/7kdrro9xb6/840x840px/Frank's%20RedHot%20Buffalo%20Chicken%20Pizza_2019-05-24_TSUCALAS_%209544.jpg?crop=true&q=80&u=1zsthd",
    "https://www.effortlessfoodie.com/wp-content/uploads/2022/04/bbq-chicken-bacon-pizza-4.jpg",
    "https://harrystable.com/wp-content/uploads/2022/05/pizza-Quattro-Formaggi-Bianca.jpg",
    "https://eu.ooni.com/cdn/shop/articles/20220211142754-margherita-9920.jpg?crop=center&height=800&v=1644590277&width=800", // Actual URL for Margarita
    "https://jacksprattscleveland.com/wp-content/uploads/2021/07/Chicken-Bacon-Ranch.jpg",
    "https://moderncrumb.com/wp-content/uploads/2020/02/hawaiian-pizza-olive-oil-base-02-720x720.jpg",
    "https://sweetcayenne.com/wp-content/uploads/2020/03/meatball-pizza-6-scaled-500x500.jpg",
  ];


  let cheeses = []
  async function getCheeses() {
    return await Cheese.find()
  }
  

  let toppings = []
  async function getToppings() {
    return await Toppings.find()
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
  
