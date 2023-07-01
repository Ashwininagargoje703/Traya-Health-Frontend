import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { backendUrl } from "../http";

export default function Register() {
  const [name, setName] = useState(""); // Add name state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  document.title = "Register";

  const submitUser = (e) => {
    e.preventDefault();
    let user = { name, email, password }; // Include name in the user object

    fetch(`${backendUrl}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 201) {
          handleLogin(res?.user, res.token);
          navigate("/login");
        }
      })
      .catch((e) => {
        alert("incorrect details!, please enter correct details.");
      });

    setName(""); // Clear the name field
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
      <Typography variant="h6">Register</Typography>
      <form onSubmit={submitUser}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              type="text"
              id="name"
              name="name"
              label="Name" // Update the label to "Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              type="email"
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              type="password"
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography>
        Already have an account? <Link to="/login">Login here</Link>
      </Typography>
    </Box>
  );
}
