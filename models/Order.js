const { Schema } = require('mongoose')

const orderSchema = new Schema(
    {
        menu_item: [{item:{type: Schema.Types.ObjectId, ref:"Menu"}}],
        custom_pizza: [{
            base_pizza: {type: Schema.Types.ObjectId, ref:'Menu'},
            toppings: [{type: Schema.Types.ObjectId, ref:'Toppings'}],
            cheeses: [{type: Schema.Types.ObjectId, ref:'Cheese'}]
        }],
        total_price: {type: Number, required: true},
    },
    { timestamps: true },
)

module.exports = orderSchema