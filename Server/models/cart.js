const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  customerName: {
    type: String,
    require: true,
  },
  totalPrice: {
    type: Number,
    require: true,
    min: 0,
  },
  products: {
    type: [{ name: String, quantity: Number }],
    require: true,
  },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
