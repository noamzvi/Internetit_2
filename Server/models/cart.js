const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({

    customerName: {
        type: String,
        require: true
    },
    totalPrice: {
        type: Number,
        require: true,
        min: 0
    },
    products: {
        type: [String],
        require: true
    },
})

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;

