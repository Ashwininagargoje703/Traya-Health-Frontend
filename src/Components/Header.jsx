import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Link,
} from "@mui/material";
import { AccountCircle, ExitToApp } from "@mui/icons-material";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { user, handleLogout } = useContext(AuthContext);

  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#414042" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: "white" }}>
          <img
            src="https://i.ibb.co/hWg6yVf/Whats-App-Image-2023-06-30-at-10-25-49-PM.jpg"
            alt="img"
          />
        </Typography>
        {user ? (
          <>
            <Typography variant="h6" sx={{ color: "white" }}>
              Welcome, {user.name}
            </Typography>
            <Button
              color="inherit"
              startIcon={<ExitToApp />}
              sx={{ color: "white" }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button
            color="inherit"
            startIcon={<AccountCircle />}
            sx={{ color: "white" }}
            component={Link}
            to="/login"
            onClick={handleLogin}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
