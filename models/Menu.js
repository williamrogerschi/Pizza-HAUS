const {Schema} = require('mongoose')

const menuSchema = new Schema(
    {        
        name: {type: String, required: true},
        toppings: [{type: Schema.Types.ObjectId, ref: 'Toppings'}],
        base_price: {type: Number, required: true},   
        description: {type: String },    
        cheeses: [{type: Schema.Types.ObjectId, ref: 'Cheeses'}],
        image:{type: String }
    },
    {timestamps: true}
)

module.exports = menuSchema