import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Link,
} from "@mui/material";
import { AccountCircle, ExitToApp } from "@mui/icons-material";

const Header = () => {
  const handleLogin = () => {
    window.location.href = "/login";
  };
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#414042",
      }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: "white" }}>
          <img
            src="https://i.ibb.co/hWg6yVf/Whats-App-Image-2023-06-30-at-10-25-49-PM.jpg"
            alt="img"
          />
        </Typography>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
