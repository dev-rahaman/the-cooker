/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./spiner.css";

const Spinner = ({ spinner }) => {
  if (spinner) {
    return (
      <div className="spinner">
        <div className="loader"></div>
      </div>
    );
  } else {
    return null;
  }
};

export default Spinner;
