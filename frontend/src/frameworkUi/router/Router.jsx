import React from "react";
import LoginPage from "../../interface/pages/LoginPage";
import { Route, Routes } from "react-router-dom";

import LocationComponent from "../../interface/components/LocationComponent";
import Home from "../../interface/pages/Home";
import WebTask from "../../interface/components/WebTask";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Home />}>
          <Route path="/web-task" element={<WebTask />} />
          <Route path="/location" element={<LocationComponent />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
