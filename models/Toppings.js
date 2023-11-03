const { Schema } = require('mongoose')

const toppingSchema = new Schema (
     {
        name: { type: String, required: true },
     },
     { timestamps: true },
)

module.exports = toppingSchema