const { Schema } = require('mongoose')

const cyopSchema = new Schema(
    {
        pizza: [{custom_pizza: {
            base_pizza: {type: Schema.Types.ObjectId, ref:'Menu', required: true},
            toppings: [{type: Schema.Types.ObjectId, ref:'Toppings', required: true}],
            cheeses: [{type: Schema.Types.ObjectId, ref:'Cheese', required: true}]
        }}],
    }
)

module.exports = cyopSchema