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
import Docs from "./pages/Docs/Docs";
import LoginPage from "./pages/LoginPage/LoginPage";
import Policy from "./pages/Policy/Policy";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import IndicatorMarketplace from "./pages/IndicatorMarketplace/IndicatorMarketplace";
import IndicatorDetails from "./pages/IndicatorDetails/IndicatorDetails";
import CreateIndicator from "./pages/CreateIndicator/CreateIndicator";
import BlogPage from "./pages/BlogPage/BlogPage";
import CreateBlog from "./pages/CreateBlog/CreateBlog";
import BlogPost from "./pages/BlogPost/BlogPost";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage path="login" />} />
          <Route path="/signup" element={<LoginPage path="signup" />} />
          <Route path="/" element={<Home />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/docs" element={<Docs />} />
          <Route
            path="/indicator-marketplace"
            element={<IndicatorMarketplace />}
          />
          <Route path="/indicator/:id" element={<IndicatorDetails />} />
          <Route path="/indicator/create" element={<CreateIndicator />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/create" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
