import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cart, getTotalAmount, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const saveCart = () => {
    console.log("save cart");
    axios
      .post("http://localhost:5001/cart", {
        totalPrice: getTotalAmount(),
        products: cart.map((item) => {
          return { name: item.name, quantity: item.quantity };
        }),
      })
      .then((res) => {
        alert("cart saved succesfully");
        clearCart();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("error in saving cart");
      });
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="table-container">
        <TableContainer component={Paper}>
          <Table stickyHeader={true} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": {
                    fontWeight: 700,
                    fontSize: "1rem",
                  },
                }}
              >
                <TableCell align="justify">Product</TableCell>
                <TableCell align="justify">Price ($)</TableCell>
                <TableCell align="justify">Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((food) => (
                <TableRow key={food.name}>
                  <TableCell>{food.name}</TableCell>
                  <TableCell>{food.price}</TableCell>
                  <TableCell>{food.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <h3>Total Amount: {getTotalAmount()} $</h3>
      <div className="cart-buttons-container">
        <button className="action-button" onClick={saveCart}>
          Save cart
        </button>
        <button
          className="action-button"
          onClick={() => {
            navigate("/");
          }}
        >
          Add more products
        </button>
      </div>
    </div>
  );
}

export default Cart;
