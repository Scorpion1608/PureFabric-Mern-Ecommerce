import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "../styles/CartStyles.css";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const withQty = existingCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCart(withQty);
  }, []);

  const saveCart = (items) => {
    setCart(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    saveCart(updatedCart);
  };

  const changeQuantity = (id, delta) => {
    const updatedCart = cart
      .map((item) => {
        if (item._id !== id) return item;
        const newQty = (item.quantity || 1) + delta;
        if (newQty <= 0) return null;
        return { ...item, quantity: newQty };
      })
      .filter(Boolean);
    saveCart(updatedCart);
  };

  const totalPrice = () =>
    cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  const handleCheckout = () => {
    // optional: stop if cart is empty
    if (!cart.length) return;
    navigate("/Checkout");
  };

  return (
    <Layout title="Your Cart">
      <div className="shopping-cart">
        <div className="title">
          Shopping Bag
          <span className="item-count">
            {cart.length ? `You have ${cart.length} items` : "Your cart is empty"}
          </span>
        </div>

        {cart.length === 0 && (
          <div className="empty-cart">Your cart is empty</div>
        )}

        {cart.map((p) => (
          <div className="item" key={p._id}>
            <div className="buttons">
              <span
                className="delete-btn"
                onClick={() => removeItem(p._id)}
                title="Remove"
              ></span>
            </div>

            <div className="image">
              <img src={p.image} alt={p.name} />
            </div>

            <div className="description">
              <span>{p.name}</span>
              <span>{p.category || "Product"}</span>
              <span>{p.description?.substring(0, 40) || ""}</span>
            </div>

            <div className="quantity">
              <button
                className="minus-btn"
                type="button"
                onClick={() => changeQuantity(p._id, -1)}
              >
                -
              </button>

              <input type="text" readOnly value={p.quantity || 1} />

              <button
                className="plus-btn"
                type="button"
                onClick={() => changeQuantity(p._id, 1)}
              >
                +
              </button>
            </div>

            <div className="total-price">₹ {p.price * (p.quantity || 1)}</div>
          </div>
        ))}

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              Total: <span>₹ {totalPrice()}</span>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
