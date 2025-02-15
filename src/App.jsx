import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  let accessToken = localStorage.getItem("token");
  const [authorized, setAuthorized] = useState(false);

  async function isAuthorized(accessToken) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/user/authorized`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        setAuthorized(true);
        return response;
      } else {
        setAuthorized(false);
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }

  useState(() => {
    if (accessToken) {
      console.log(isAuthorized(accessToken));
    }
  }, []);

  if (accessToken) {
    setTimeout(() => {
      localStorage.removeItem("token");
      window.location.reload();
      setAuthorized(false);
      accessToken = null;
      1;
    }, 1000 * 60);
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/login"
            element={
              !authorized ? (
                <LoginPage path="login" />
              ) : (
                <Navigate replace to="/" />
              )
            }
          />
          <Route
            path="/signup"
            element={
              !authorized ? (
                <LoginPage path="signup" />
              ) : (
                <Navigate replace to="/" />
              )
            }
          />
          {/* <Route
            path="/"
            element={authorized ? <Home /> : <Navigate replace to="/login" />}
          /> */}
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
