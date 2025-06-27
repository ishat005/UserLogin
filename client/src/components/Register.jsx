import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/authActions";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Grid,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    dispatch(register(firstName, lastName, email, username, password));
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
          maxWidth: { xs: "100%", sm: 500, md: 600 },
          mx: "auto",
        }}
      >
        <Paper
          elevation={3}
          sx={{ padding: "12px", width: "96%", borderRadius: "20px" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 3, mt: 5 }}>
            <PersonAddIcon sx={{ mr: 1, fontSize: 30 }} />
            <Typography component="h1" variant="h4">
              Register
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.5 }}
            >
              Register
            </Button>

            <Box textAlign="center">
              <Typography variant="body2">
                Already have an account?{" "}
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Typography
                    component="span"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Sign In
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

export default Register;
