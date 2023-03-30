const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
    {
        userId:{type: String, unique: true, required: true},
        products: [
           {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1
            }
           }
        ],

    },
    {timestam: true}
    )

    module.exports = mongoose.model('Cart', CartSchema);