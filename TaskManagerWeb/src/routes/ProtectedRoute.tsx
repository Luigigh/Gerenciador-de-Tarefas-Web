import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute() {
  const { token } = useAuth();

  console.log(
    "[PROTECTED ROUTE] Token encontrado:",
    !!token
  );

  if (!token) {
    console.log(
      "[PROTECTED ROUTE] Usuário não autenticado. Redirecionando para login."
    );

    return <Navigate to="/login" replace />;
  }

  console.log(
    "[PROTECTED ROUTE] Usuário autenticado. Acesso permitido."
  );

  return <Outlet />;
}

export default ProtectedRoute;