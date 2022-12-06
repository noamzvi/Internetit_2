const express = require("express");
const cors = require('cors');
const { default: mongoose } = require("mongoose");
const Cart = require("./models/cart");
const Product = require("./models/product");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/store', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open");
    }).catch((err) => {
        console.log(err);
    })

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.send(products);
})

app.post('/cart', async (req, res) => {
    const cart = req.body;
    Cart.insertMany(cart)
        .then(r => {
            res.send(r);
        })
        .catch(err => {
            res.send(err);
        })
})

app.listen(5001, () => {
    console.log("listening on port 5001")
})