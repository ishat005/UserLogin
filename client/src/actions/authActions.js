import axios from "axios";

export const login = (username, password) => {
  return (dispatch) => {
    axios
      .post(`${import.meta.env.VITE_API_URL || 'https://userlogin-124f.onrender.com'}/api/login`, { username, password })
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_ERROR", payload: error.response?.data?.message || error.message });
      });
  };
};

export const register = (firstName, lastName, email, username, password) => {
  return (dispatch) => {
    axios
      .post(`${import.meta.env.VITE_API_URL || 'https://userlogin-124f.onrender.com'}/api/register`, { firstName, lastName, email, username, password })
      .then((response) => {
        dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "REGISTER_ERROR", payload: error.message });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: "LOGOUT_SUCCESS" });
  };
};

export const checkAuth = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch({ type: "LOGOUT_SUCCESS" });
      return;
    }
    
    // Validate token by making a request to protected endpoint
    axios.get(`${import.meta.env.VITE_API_URL || 'https://userlogin-124f.onrender.com'}/api/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((response) => {
      // Token is valid, user stays logged in
      dispatch({ type: "TOKEN_VALID", payload: response.data.user });
    })
    .catch(() => {
      // Token is invalid, logout user
      localStorage.removeItem('token');
      dispatch({ type: "LOGOUT_SUCCESS" });
    });
  };
};
