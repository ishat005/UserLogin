import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import Login from "./components/Login";
import Register from "./components/Register";
import Auth from "./containers/Auth.jsx";
import { checkAuth } from "./actions/authActions";

const AppContent = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/protected" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
