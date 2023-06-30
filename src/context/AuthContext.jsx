import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("token") || null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const handleLogin = (user, gottoken) => {
    setUser(user);
    setToken(gottoken);
    localStorage.setItem("token", gottoken);
    localStorage.setItem("user", user);
  };

  const values = {
    user,
    setUser,
    handleLogin,
    token,
    setToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
