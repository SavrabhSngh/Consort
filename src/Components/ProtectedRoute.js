import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const data = localStorage.getItem("token");
  return data ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
