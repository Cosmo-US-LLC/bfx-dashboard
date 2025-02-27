import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/index.jsx";
import SignIn from "./Page/SignIn.jsx";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("authToken")
  );

  const handleLogin = (token) => {
    localStorage.setItem("authToken", token); 
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); 
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/sign-in"
          element={<SignIn onLogin={handleLogin} />}
        />

        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <Layout onLogout={handleLogout} />
            ) : (
              <Navigate to="/sign-in" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
