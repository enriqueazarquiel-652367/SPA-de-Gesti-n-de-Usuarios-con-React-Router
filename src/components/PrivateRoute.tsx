import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ReactNode } from "react";

function PrivateRoute({ children }: { children: ReactNode }) {
    const { user } = useAuth();
    return user ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute;
