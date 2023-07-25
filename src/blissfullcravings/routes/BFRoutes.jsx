import { Navigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux";
import ProtectedRoute from "../../router/ProtectedRoute";

import HomePage from "../pages/HomePage"
import Products from "../pages/Products"
import Dashboard from "../pages/Dashboard"


//import Dev from "../pages/Dev"

export const BKCRoutes = () => {
  const { uid, role } = useSelector((state) => state.auth);

  const isAuthenticated = !!uid && !!role && role === "Admin";

  return (
    <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products" element={ <Products /> } />
        <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        <Route path="/*" element={ <Navigate to="/" replace={true}/> } />
    </Routes>
  )
}
