import React from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const PaymentSuccess = () => {
  const location = useLocation();
  const orderId = location.state?.orderId;

  return (
    <Layout title="Payment Success">
      <div className="container" style={{ maxWidth: 700, paddingTop: 40 }}>
        <div className="card p-4 text-center">
          <h2>Payment Successful </h2>
          <p style={{ marginTop: 10 }}>
            Order placed successfully{orderId ? `: ${orderId}` : ""}.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16 }}>
            <Link className="btn btn-primary" to="/">
              Continue Shopping
            </Link>
            <Link className="btn btn-outline-secondary" to="/cart">
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;
