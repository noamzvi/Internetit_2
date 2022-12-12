const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  totalPrice: {
    type: Number,
    require: true,
    min: 0,
  },
  products: {
    type: [{ name: String, quantity: Number }],
    require: true,
  },
  name: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  }
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
