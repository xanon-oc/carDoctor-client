import React from "react";
import NavBar from "../Shared/NavBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
