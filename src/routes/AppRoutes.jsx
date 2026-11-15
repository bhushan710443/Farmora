
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/Homepage";

import MainLayout from "../components/layout/MainLayout";
import LoginPage from "../pages/Loginpage";
import LocationRoutes from "../pages/Locationpage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<MainLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/location/*" element={<LocationRoutes />}/>
      </Route>
      

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;
