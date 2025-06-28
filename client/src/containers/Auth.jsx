import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../actions/authActions";
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Avatar
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

/**
 * Auth is a protected route component that renders a welcome message and a logout button.
 *
 * It uses the `useSelector` hook to access the `authenticated` and `user` state slices.
 *
 * If the user is not authenticated, it redirects the user to the login page.
 *
 * If the user is authenticated, it renders a welcome message and a logout button.
 *
 * The logout button is connected to the `logout` action creator, which is used to log the user out.
 *
 * @return {React.ReactElement} The rendered component.
 */
const Auth = () => {
  const authenticated = useSelector((state) => state.authenticated);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: 450, md: 500 },
          mx: 'auto'
        }}
      >
        <Paper elevation={3} sx={{ padding: { xs: 3, sm: 4, md: 5 }, textAlign: 'center' }}>
          <Avatar
            sx={{
              mx: 'auto',
              mb: 2,
              bgcolor: 'primary.main',
              width: 64,
              height: 64
            }}
          >
            <AccountCircleIcon sx={{ fontSize: 40 }} />
          </Avatar>
          
          <Typography component="h1" variant="h4" gutterBottom>
            Welcome!
          </Typography>
          
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Hello, {user?.username}!
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4 }}>
            You have successfully accessed the protected area.
          </Typography>
          
          <Button
            variant="contained"
            color="error"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{ py: 1.5, px: 4 }}
          >
            Logout
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Auth;