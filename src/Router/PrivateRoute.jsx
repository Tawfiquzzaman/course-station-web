import React, { useContext } from "react";
import { AuthContext } from "../context/Authcontext/AuthContext";
import { Navigate } from "react-router";
import Loading from "../Pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
