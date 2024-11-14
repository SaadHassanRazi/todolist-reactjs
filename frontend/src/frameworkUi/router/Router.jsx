import React from "react";
import LoginPage from "../../interface/pages/LoginPage";
import { Route, Routes } from "react-router-dom";

import LocationComponent from "../../interface/components/LocationComponent";
import Home from "../../interface/pages/Home";
import WebTask from "../../interface/components/WebTask";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />}>
            <Route path="webtask" element={<WebTask />} />
            <Route path="location" element={<LocationComponent />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
