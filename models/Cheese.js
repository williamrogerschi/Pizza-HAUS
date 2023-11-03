const { Schema } = require('mongoose')

const cheeseSchema = new Schema (
    {
    name: {type: String, required: true},
    description: {type: String, required: true}
    },
    { timestamps: true }
)

module.exports = cheeseSchema