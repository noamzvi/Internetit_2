const express = require("express");
const { default: mongoose } = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/store", { useNewUrlParser: true })
  .then(() => {
    console.log("mongo connection open");
  })
  .catch((err) => {
    console.log("error in connection");
    console.log(err);
  });

const seedProduct = [
  {
    name: "banana",
    price: 1.0,
    description: "Fruit",
    imageUrl:
      "https://www.lovemysalad.com/sites/default/files/styles/home_carousel_item_768/public/banaan-large.jpg?itok=tMUaAk0b",
  },
  {
    name: "orange",
    price: 4.0,
    description: "Fruit",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQK-hpm47mZPLjOqRC38t-sa3Kei6ajF83w&usqp=CAU",
  },
  {
    name: "carrot",
    price: 2.5,
    description: "Vegetable",
    imageUrl:
      "https://thumbs.dreamstime.com/b/carrot-isolated-white-background-109799060.jpg",
  },
];

Product.insertMany(seedProduct)
  .then((res) => {
    console.log("res");
  })
  .catch((err) => {
    console.log("err");
  });
