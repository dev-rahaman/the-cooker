/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  if (loading) {
    return (
      <div className="spinierContainer">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <Navigate to="/login" state={{ from: location }} replace></Navigate>
    </>
  );
};

export default PrivateRoutes;
