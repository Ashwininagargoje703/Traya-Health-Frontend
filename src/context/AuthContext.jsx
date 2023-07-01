import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const handleLogin = (user, token) => {
    setUser(user);
    setToken(token);
    // localStorage.setItem("user", user);
    // localStorage.setItem("token", token);
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    // localStorage.removeItem("user");
    // localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const values = {
    user,
    setUser,
    handleLogin,
    handleLogout,
    token,
    setToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
