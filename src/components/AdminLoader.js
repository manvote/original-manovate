import React from "react";
import "./admin-loader.css";

const AdminLoader = ({ label = "Loading data…" }) => {
  return (
    <div className="admin-loader-wrapper">
      <div className="admin-spinner"></div>
      <p>{label}</p>
    </div>
  );
};

export default AdminLoader;