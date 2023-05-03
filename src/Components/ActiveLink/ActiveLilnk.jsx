/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLilnk = ({ to, children }) => {
  return (
    <div>
      <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLilnk;
