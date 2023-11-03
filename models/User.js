const { Schema } = require('mongoose')

const userSchema = new Schema(
    {
        cart_id: {type: Schema.Types.ObjectId, ref:"Cart", required: true},
        address: {type: String, required: true},
        phone: {type: String, required: true},
        points: {type: Number, required: true}

    }
)

module.exports = userSchema