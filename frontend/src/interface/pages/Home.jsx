import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex">
      <div className="col-2 col-md-3 ">
        <Sidebar />
      </div>
      <div className="col p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
