// context/auth.js
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // LOAD USER FROM LOCALSTORAGE ON APP START
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setAuth({
          user: parsed.user,
          token: parsed.token,
        });
      } catch (err) {
        console.log("Invalid auth data in localStorage");
        localStorage.removeItem("auth");
      }
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("auth", JSON.stringify(userData));
    setAuth({
      user: userData.user,
      token: userData.token,
    });
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setAuth({
      user: null,
      token: "",
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
