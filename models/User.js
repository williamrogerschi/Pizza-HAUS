const { Schema } = require('mongoose')


const userSchema = new Schema(
    {
        cart: {type: Schema.Types.ObjectId, ref:"Cart"},
        user_name: {type: String, required: true},
        address: {type: String},
        phone: {type: String},
        points: {type: Number, required: true}
    },
    { timestamps: true },
)

module.exports = userSchema