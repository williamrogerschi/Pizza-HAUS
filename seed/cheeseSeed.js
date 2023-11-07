const db = require('../db/index')

const { Cart, Cheese, Menu, Topping, User} = require('../models/Index.js')

db.on('error', console.error.bind(console, `MongoDB connection error:`))



const pizzaCheeses = [
    {
        name: 'Asiago',
        description: 'Asiago has a mild and delicate flavor.',
      },
      {
        name: 'Mozzarella',
        description: 'Mozzarella is known for its creamy and milky taste. It melts beautifully on pizzas.',
      },
      {
        name: 'Parmesan',
        description: 'Parmesan is a hard, aged cheese with a sharp and salty flavor, perfect for grating on pizzas.',
      },
      {
        name: 'Cheddar',
        description: 'Cheddar cheese adds a rich, sharp flavor to pizzas when melted.',
      },
      {
        name: 'Provolone',
        description: 'Provolone has a mild, slightly tangy taste and melts well on pizzas.',
      },
      {
        name: 'Gouda',
        description: 'Gouda offers a smooth and creamy flavor, making it a great choice for pizzas.',
      },
      {
        name: 'Fontina',
        description: 'Fontina is a semi-soft cheese with a rich, buttery taste that complements pizzas.',
      },
      {
        name: 'Ricotta',
        description: 'Ricotta is a creamy, mild cheese often used in pizza toppings or stuffed crusts.',
      },
      {
        name: 'Blue Cheese',
        description: 'Blue cheese is bold and pungent, adding a strong flavor to pizzas.',
      },
      {
        name: 'Gorgonzola',
        description: 'Gorgonzola is a creamy and tangy blue cheese, great for adding a unique twist to pizza.',
      },
    ]

const createAndSaveCheese = async (name, description) => {
    const newCheese = new Cheese({ name, description })
    await newCheese.save()
}


module.exports = async function cheeseSeed() {
    for (const cheese of pizzaCheeses) {
        await createAndSaveCheese(cheese.name, cheese.description)
      }
      // db.close()
    }
    // main()



