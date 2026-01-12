// src/context/index.js
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // auth = { user, token }
  const [auth, setAuth] = useState(() => {
    try {
      const saved = localStorage.getItem("auth");
      return saved ? JSON.parse(saved) : { user: null, token: "" };
    } catch (e) {
      return { user: null, token: "" };
    }
  });

  // optional: cart in same context (since you’re using localStorage cart)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // keep auth in sync with localStorage
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  // keep cart in sync with localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const login = (dataFromBackend) => {
    // expects: { user: {...}, token: "..." }
    setAuth({
      user: dataFromBackend.user,
      token: dataFromBackend.token,
    });
  };

  const logout = () => {
    setAuth({ user: null, token: "" });
    // optional:
    // setCart([]);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const index = prev.findIndex((x) => x._id === product._id);
      if (index >= 0) {
        const next = [...prev];
        next[index] = { ...next[index], quantity: (next[index].quantity || 1) + 1 };
        return next;
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((x) => x._id !== id));
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        login,
        logout,
        cart,
        setCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
};
