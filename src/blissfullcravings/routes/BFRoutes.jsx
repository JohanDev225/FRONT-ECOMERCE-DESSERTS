import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Products from "../pages/Products"

//import Dev from "../pages/Dev"

export const BKCRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products" element={ <Products /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
