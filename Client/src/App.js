import { useEffect, useState } from "react";
import axios from "axios";
import FoodOption from "./components/FoodOption";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="app-list">
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
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
