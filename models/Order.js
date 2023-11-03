const { Schema } = require('mongoose')

const orderSchema = new Schema(
    {
        menu_item: [{item:{type: Schema.Types.ObjectId, ref:"Menu"}, required: true}],
        custom_pizza: {type: Schema.Types.ObjectId, ref:"CYOP", required: true},
        total_price: {type: Number, required: true},
    },
    { timestamps: true },
)

module.exports = orderSchema