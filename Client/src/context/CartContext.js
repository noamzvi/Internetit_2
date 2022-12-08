import { useCallback, useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  cart: [],
  addProduct: () => {},
  getTotalAmount: () => {},
  clearCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    const index = cart.findIndex((e) => e.name === product.name);

    if (index === -1) {
      cart.push({ ...product, quantity: 1 });
      console.log("product added");
    } else {
      cart[index].quantity++;
      console.log("product quantity updated");
    }

    setCart([...cart]);
    alert("Product added to cart!");
  };

  const getTotalAmount = useCallback(() => {
    return cart.length > 0
      ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      : 0;
  }, [cart]);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, getTotalAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
