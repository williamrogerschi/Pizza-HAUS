const { Schema } = require('mongoose')

const toppingSchema = new Schema (
     {
        name: { type: String, required: true },
        type: { type: String, required: true },
      //   price: {type: String, required: true },
     },
     { timestamps: true },
)

module.exports = toppingSchema