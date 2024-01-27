import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Root;
