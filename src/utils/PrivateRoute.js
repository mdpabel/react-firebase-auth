import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

function PrivateRoute({ element, ...props }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return <Route element={element} {...props} />;
}

export default PrivateRoute;
