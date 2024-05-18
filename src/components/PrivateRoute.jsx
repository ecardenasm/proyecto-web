import React from "react";
import { useAuth } from "../Context/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;