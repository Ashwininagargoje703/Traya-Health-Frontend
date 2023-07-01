import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { backendUrl } from "../http";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  const { user, token, handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  document.title = "Login";

  useEffect(() => {
    if (user || token) {
      navigate("/");
    }
  }, [handleLogin, token, user]);

  const handleSnackbarClose = () => {
    setShowAlert(false);
  };

  const submitUser = (e) => {
    e.preventDefault();
    let user = { email, password };

    fetch(`${backendUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 404) {
          setAlertSeverity("error");
          setAlertMessage("User not found!");
        } else if (res.status === 400) {
          setAlertSeverity("error");
          setAlertMessage("Incorrect password!");
        } else if (res.status === 200) {
          handleLogin(res?.user, res?.token);
          setAlertSeverity("success");
          setAlertMessage("Login successful!");
        } else {
          setAlertSeverity("error");
          setAlertMessage("Something went wrong!");
        }
        setShowAlert(true);
      })
      .catch((e) => {
        console.log(e);
        setAlertSeverity("error");
        setAlertMessage("Something went wrong!");
        setShowAlert(true);
      });

    setEmail("");
    setPassword("");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Typography variant="h6">Login</Typography>
      <form onSubmit={submitUser}>
        <Box sx={{ display: "grid", gap: 2 }}>
          <TextField
            type="email"
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            defaultValue="Small"
            size="small"
          />
          <TextField
            type="password"
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            defaultValue="Small"
            size="small"
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </form>
      <Typography>
        Don't have an account? <Link to="/register">Register here</Link>
      </Typography>

      {showAlert && (
        <Snackbar
          open={showAlert}
          autoHideDuration={5000}
          onClose={handleSnackbarClose}
        >
          <Alert onClose={handleSnackbarClose} severity={alertSeverity}>
            {alertMessage}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
}
