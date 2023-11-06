const db = require('../db/index')

const { User, Order, Cart } = require('../models/Index.js')

db.on('error', console.error.bind(console, `MongoDB connection error:`))

const addUsers = async () => {

    const users = [
    ]
    for (let i = 1; i <= 20; i++) {
        users.push({ user_name: `User${i}` })
    }
    // console.log(users)
    await User.insertMany(users)    
    console.log('Users created')
}


const main = async () => {
    await addUsers()
    const carts = await Cart.find()
    // let users = []
    for (let i = 0; i < carts.length; i++) {
        let user = await User.findOne().skip(i)
        await User.findByIdAndUpdate(user._id, {cart: cart._id})
    }
    // await Cart.insertMany(carts)

    db.close()
    console.log('Created Users')
}

main()
