import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Welcome from "./components/Welcome";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const { status } = useSelector((state) => state.user.loginResponse);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/user"
            element={status === "success" ? <Welcome /> : <Navigate to="/" />}
          />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
