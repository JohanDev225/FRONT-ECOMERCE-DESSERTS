import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

import ProtectedRoute from "../../router/ProtectedRoute";

export const AuthRoutes = () => {
  //trae del localstorage el token
  const token = localStorage.getItem("token");

  //si existe el token, no esta autenticado
  const isAuthenticated = token ? false : true;

  return (
    <Routes>
      <Route
        path="login"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <LoginPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="register"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <RegisterPage />
          </ProtectedRoute>
        }
      />
      <Route path="/*" element={<Navigate to="/auth/login" replace={true}/>} />
    </Routes>
  );
};
