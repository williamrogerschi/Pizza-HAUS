const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const menuSchema = new Schema(
    {        
        name: {type: String, required: true},
        toppings: [{type: Schema.Types.ObjectId, ref: 'Toppings'}],
        base_price: {type: Number, required: true},
        size: {type: String, required: true},      
        description: {type: String, required: true},        
    },
    {timestamps: true}
)

module.exports = mongoose.model('Menu', menuSchema)