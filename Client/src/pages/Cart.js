import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import {
  Dialog,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cart, getTotalAmount, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [personDet, setPersonDet] = useState({});

  const saveCart = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5001/cart", {
        totalPrice: getTotalAmount(),
        products: cart.map((item) => {
          return { name: item.name, quantity: item.quantity };
        }),
        name: personDet.name,
        phone: personDet.phone,
      })
      .then((res) => {
        alert("cart saved succesfully");
        setShowPopup(false);
        clearCart();
        navigate("/");
        console.log("cart saved succesfully");
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
        <button
          disabled={cart.length === 0}
          style={{ cursor: cart.length === 0 ? "default" : "pointer" }}
          className="action-button"
          onClick={() => setShowPopup(true)}
        >
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

      <Dialog open={showPopup}>
        <form onSubmit={saveCart}>
          <DialogTitle
            sx={{
              alignSelf: "center",
              "&.MuiDialogTitle-root": {
                fontSize: "1.5rem",
                fontWeight: "600",
              },
            }}
          >
            Just a few last details...
          </DialogTitle>
          <DialogContent>
            <div className="popup__content">
              <p className="popup__info">
                <b>Your name:</b>
                <input
                  required
                  className="popup__input"
                  onChange={(e) =>
                    setPersonDet((prev) => {
                      return { ...prev, name: e.target.value };
                    })
                  }
                />
              </p>
              <p className="popup__info">
                <b>Your phone number:</b>
                <input
                  required
                  className="popup__input"
                  onChange={(e) =>
                    setPersonDet((prev) => {
                      return { ...prev, phone: e.target.value };
                    })
                  }
                />
              </p>
            </div>
          </DialogContent>
          <DialogActions>
            <button
              type="submit"
              className="popup__close-button"
              // onClick={saveCart}
            >
              Save
            </button>
            <button
              className="popup__close-button"
              onClick={(e) => {
                e.preventDefault();
                setShowPopup(false);
              }}
            >
              Cancel
            </button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default Cart;
