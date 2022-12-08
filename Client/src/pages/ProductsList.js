import { useEffect, useState } from "react";
import axios from "axios";
import FoodOption from "../components/FoodOption";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ProductsList.css";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const products = [
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

function ProductsList() {
  const { cart, addProduct } = useContext(CartContext);
  const navigate = useNavigate();

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:5001/products").then((res) => {
  //     setProducts(res.data);
  //   });
  // }, []);

  return (
    <div className="app-list">
      <button className="cart-button" onClick={() => navigate("/Cart")}>
        <ShoppingCartIcon />
        Cart
      </button>
      <h2>Food Options</h2>
      <div className="list-container">
        {products.map((food, i) => {
          return (
            <FoodOption
              key={i}
              title={food.name}
              img={food.imageUrl}
              price={food.price}
              desc={food.description}
              onClick={() => {
                // Add to cart
                addProduct(food);
                console.log(cart);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsList;
