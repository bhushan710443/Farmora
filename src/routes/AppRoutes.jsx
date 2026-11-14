
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/Homepage";
import LoginPage from "../pages/Loginpage";
import LocationRoutes from "../pages/Locationpage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/Home" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />

      {/* Location feature entry point */}
      <Route
        path="/location/*"
        element={<LocationRoutes />}
      />

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;
