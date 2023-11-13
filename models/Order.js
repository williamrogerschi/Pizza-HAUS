const { Schema } = require('mongoose')

const orderSchema = new Schema(
    {
        menu_item: [{type: Schema.Types.ObjectId, ref:"Menu"}],
        custom_pizza: [{
            base_pizza: {type: Schema.Types.ObjectId, ref:'Menu'},
            toppings: [{type: Schema.Types.ObjectId, ref:'Toppings'}],
            cheeses: [{type: Schema.Types.ObjectId, ref:'Cheese'}]
        }],
        total_price: {type: String, required: true},
    },
    { timestamps: true },
)

module.exports = orderSchema



//dummy order formatted for POST request
// {
//     "menu_item": [],
//         "custom_pizza": [],
//         "total_price": "0",
//         "__v": 0
// }