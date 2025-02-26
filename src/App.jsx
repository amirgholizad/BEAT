import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Docs from "./pages/Docs/Docs";
import LoginPage from "./pages/LoginPage/LoginPage";
import Policy from "./pages/Policy/Policy";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import IndicatorMarketplace from "./pages/IndicatorMarketplace/IndicatorMarketplace";
import IndicatorDetails from "./pages/IndicatorDetails/IndicatorDetails";
import CreateIndicator from "./pages/CreateIndicator/CreateIndicator";
import BlogPage from "./pages/BlogPage/BlogPage";
import CreateBlog from "./pages/CreateBlog/CreateBlog";
import BlogPost from "./pages/BlogPost/BlogPost";
import "./App.scss";
import Chart from "./pages/Chart/Chart";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token) {
      setToken(token);
      setUser(user);
    }
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <LoginPage path="login" setToken={setToken} setUser={setUser} />
          }
        />
        <Route path="/signup" element={<LoginPage path="signup" />} />
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/docs" element={<Docs />} />
        <Route
          path="/indicator-marketplace"
          element={<IndicatorMarketplace />}
        />
        <Route path="/indicator/:id" element={<IndicatorDetails />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="/indicator/create" element={<CreateIndicator />} />
        <Route path="/blog/create" element={<CreateBlog />} />

        <Route path="interactive-chart" element={<Chart />} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
