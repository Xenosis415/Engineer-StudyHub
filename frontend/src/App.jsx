// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MainLayout from "./Layout/MainLayout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import JobPortalPage from "./pages/JobPortalPage";
import LearningMaterial from "./Components/Learning Material/LearningMaterial";
import RegisterPage from "./pages/RegistrationPage"; // Added registration page

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />{" "}
            {/* Added registration route */}
            <Route path="learning-material" element={<LearningMaterial />} />
            {/* <Route path="job-portal" element={<JobPortalPage />} /> */}
            <Route
              path="interview-preparation"
              element={<div>Interview Preparation Page</div>}
            />
            <Route path="*" element={<JobPortalPage />} />{" "}
            {/* Added 404 route */}
          </Route>
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
