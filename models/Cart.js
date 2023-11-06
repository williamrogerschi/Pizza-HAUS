const { Schema } = require('mongoose')

const cartSchema = new Schema(
    {
        current_order: [{type: Schema.Types.ObjectId, ref:"Order"}]
    },
    { timestamps: true },
)

module.exports = cartSchema