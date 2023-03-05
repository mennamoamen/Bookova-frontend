import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Auth() {
  const flag = localStorage.getItem("flag");
  return <div>{flag ? <Outlet /> : <Navigate to="/logsign" />}</div>;
}

export default Auth;
