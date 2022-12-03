const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    description: {
        type: String,
        require: false
    },
    imageUrl: {
        type: String,
        require: false
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

