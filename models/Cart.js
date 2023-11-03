const { Schema } = require('mongoose')

const cartSchema = new Schema(
    {
        menu_item: [{type: Schema.Types.ObjectId, ref:"Menu", required: true}],
        total_price: {type: Number, required: true},

    },
    { timestamps: true },
)

module.exports = cartSchema