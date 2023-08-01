import { Navigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux";
import ProtectedRoute from "../../router/ProtectedRoute";

import HomePage from "../pages/HomePage"
import Products from "../pages/Products"
import Dashboard from "../pages/Dashboard"
import Product from "../pages/Product";
import Orders from "../pages/Orders";

//import Dev from "../pages/Dev"

export const BKCRoutes = () => {
  const { uid, role } = useSelector((state) => state.auth);

  const isAuthenticated = !!uid && !!role && role === "Admin";
  const isUserAuthenticated = !!uid && !!role && role === "Costumer";

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/myorders"
        element={
          <ProtectedRoute isAuthenticated={isUserAuthenticated}>
            <Orders />
          </ProtectedRoute>
        }
      />
      <Route path="/*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  )
}
