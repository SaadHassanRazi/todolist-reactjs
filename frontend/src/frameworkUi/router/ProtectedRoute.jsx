    import React, { useEffect } from "react";
    import { Navigate, Outlet } from "react-router-dom";
    import { useAuth } from "../../useCases/context/AuthContext";

    function ProtectedRoute() {
    const { token } = useAuth();

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
    }
    export default ProtectedRoute;
