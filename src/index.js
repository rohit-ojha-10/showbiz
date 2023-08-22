import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import DetailPage from "./Pages/DetailPage";
import LoginPage from "./Pages/LoginPage";
import CreateReview from "./Pages/CreateReview";
import axios from "axios";
import { useState, useEffect } from "react";
import { SignupForm } from "./components/SignupForm";
import SignupPage from "./Pages/SignupPage";
import ReviewPage from "./Pages/ReviewPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const token = localStorage.getItem("authToken");
async function verification() {
  const verify = await axios.get("http://localhost:4000/authenticate", {
    headers: {
      Authorization: `Bearer ${token ? token : ""}`,
    },
  });
  console.log("in index", verify.data);
  return verify.data.success;
}
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/create-review" element={<CreateReview />} />
        <Route path="/review-page" element={<ReviewPage />} />

      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
