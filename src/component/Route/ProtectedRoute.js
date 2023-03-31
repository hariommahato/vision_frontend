import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({
  adminRoute,
  component: Component,
  ...routeProps
}) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  if (!loading && isAuthenticated === false) {
    navigate("/login");
  }
// eslint-disable-next-line
  if (adminRoute && user?.admin == false) {
    navigate("/login");
  }

  return <Component {...routeProps} />;
};
export default ProtectedRoute;
