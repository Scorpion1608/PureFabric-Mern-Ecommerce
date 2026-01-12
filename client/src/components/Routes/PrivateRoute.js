import { useAuth } from "../../Context";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { auth } = useAuth();
  if (!auth.user || !auth.token) {
    return <Navigate to="/login" />;
  }
  return children;
}
