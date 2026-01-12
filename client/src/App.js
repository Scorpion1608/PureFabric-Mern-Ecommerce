// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context"; // keep this only if your folder is src/Context
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Pagenotfound from "./pages/Pagenotfound";
import PrivateRoute from "./components/Routes/PrivateRoute";
import CategoryProduct from "./pages/CategoryProduct";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />

        {/* ✅ FIXED (lowercase path + correct component) */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

        {/* Category Routes */}
        <Route path="/category" element={<Category />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />

        {/* Protected Routes */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
