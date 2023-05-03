/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  return <Navigate to="login"></Navigate>;
};

export default PrivateRoutes;
