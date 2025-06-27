import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.error);
  const authenticated = useSelector((state) => state.authenticated);

  useEffect(() => {
    if (authenticated) {
      navigate("/protected");
    }
  }, [authenticated, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: 400, md: 450 },
          mx: "auto",
        }}
      >
        <Paper
          elevation={3}
          sx={{ padding: "12px", width: "96%", borderRadius: "20px" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 3, mt: 2 }}>
            <LoginIcon sx={{ mr: 1, fontSize: 30 }} />
            <Typography component="h1" variant="h4">
              Sign In
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              autoFocus
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.5 }}
            >
              Sign In
            </Button>

            <Box textAlign="center">
              <Typography variant="body2">
                Don't have an account?{" "}
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Typography
                    component="span"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Sign Up
                  </Typography>
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;
