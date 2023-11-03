const { Schema } = require('mongoose')

const userSchema = new Schema(
    {
        cart: [{type: Schema.Types.ObjectId, ref:"Menu"}],
        address: {type: String, required: true},
        phone: {type: String, required: true},
        points: {type: Number, required: true}
    },
    { timestamps: true },
)

module.exports = userSchema