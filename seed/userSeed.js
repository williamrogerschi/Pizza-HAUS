const db = require('../db/index')

const { User } = require('../models/Index.js')

db.on('error', console.error.bind(console, `MongoDB connection error:`))

const users = [
    {
        
    }
]