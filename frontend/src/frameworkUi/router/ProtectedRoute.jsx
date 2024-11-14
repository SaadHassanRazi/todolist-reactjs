import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../useCases/context/AuthContext";

function ProtectedRoute() {
  const user = useAuth();
  if (!user.token) {
    <Navigate to={"/login"} />;
  } else {
    return <Outlet />;
  }
}

export default ProtectedRoute;
