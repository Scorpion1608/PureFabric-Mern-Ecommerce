import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../Context";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, setCart, auth } = useAuth();

  const [paymentMethod, setPaymentMethod] = useState("cod"); // cod | upi | card | netbanking
  const [upiId, setUpiId] = useState("");
  const [card, setCard] = useState({ number: "", name: "", exp: "", cvv: "" });

  const total = useMemo(() => {
    return (cart || []).reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
      0
    );
  }, [cart]);

  const placeOrder = (e) => {
    e.preventDefault();

    if (!cart || cart.length === 0) return;

    // minimal validation (fake)
    if (paymentMethod === "upi" && !upiId.trim()) return;
    if (paymentMethod === "card") {
      if (!card.number || !card.name || !card.exp || !card.cvv) return;
    }

    // create fake order in localStorage
    const order = {
      id: `ORD-${Date.now()}`,
      user: auth?.user ? { _id: auth.user._id, email: auth.user.email } : null,
      items: cart,
      total,
      paymentMethod,
      status: "PAID",
      createdAt: new Date().toISOString(),
    };

    const old = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([order, ...old]));

    // clear cart
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));

    navigate("/payment-success", { state: { orderId: order.id } });
  };

  return (
    <Layout title="Checkout">
      <div className="container" style={{ maxWidth: 900, paddingTop: 30 }}>
        <h2>Checkout</h2>

        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-7">
            <form onSubmit={placeOrder} className="card p-3">
              <h5>Payment method</h5>

              <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
                <label>
                  <input
                    type="radio"
                    name="pm"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />{" "}
                  Cash on Delivery (COD)
                </label>

                <label>
                  <input
                    type="radio"
                    name="pm"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />{" "}
                  UPI
                </label>

                {paymentMethod === "upi" && (
                  <input
                    className="form-control"
                    placeholder="Enter UPI ID (e.g. name@bank)"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    required
                  />
                )}

                <label>
                  <input
                    type="radio"
                    name="pm"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />{" "}
                  Debit/Credit Card
                </label>

                {paymentMethod === "card" && (
                  <div style={{ display: "grid", gap: 10 }}>
                    <input
                      className="form-control"
                      placeholder="Card number"
                      value={card.number}
                      onChange={(e) => setCard({ ...card, number: e.target.value })}
                      required
                    />
                    <input
                      className="form-control"
                      placeholder="Name on card"
                      value={card.name}
                      onChange={(e) => setCard({ ...card, name: e.target.value })}
                      required
                    />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <input
                        className="form-control"
                        placeholder="MM/YY"
                        value={card.exp}
                        onChange={(e) => setCard({ ...card, exp: e.target.value })}
                        required
                      />
                      <input
                        className="form-control"
                        placeholder="CVV"
                        value={card.cvv}
                        onChange={(e) => setCard({ ...card, cvv: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                )}

                <label>
                  <input
                    type="radio"
                    name="pm"
                    value="netbanking"
                    checked={paymentMethod === "netbanking"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />{" "}
                  NetBanking
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-success"
                style={{ marginTop: 16 }}
                disabled={!cart || cart.length === 0}
              >
                Pay ₹ {total} (Fake)
              </button>

              {!cart?.length && (
                <p style={{ marginTop: 12, color: "#777" }}>
                  Cart is empty. Add items first.
                </p>
              )}
            </form>
          </div>

          <div className="col-md-5">
            <div className="card p-3">
              <h5>Order summary</h5>
              <hr />
              {(cart || []).map((it) => (
                <div
                  key={it._id}
                  style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}
                >
                  <div style={{ maxWidth: "70%" }}>
                    {it.name} x {it.quantity || 1}
                  </div>
                  <div>₹ {(it.price || 0) * (it.quantity || 1)}</div>
                </div>
              ))}
              <hr />
              <h5 style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Total</span>
                <span>₹ {total}</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
