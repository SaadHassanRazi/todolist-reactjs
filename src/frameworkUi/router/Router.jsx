import React from "react";
import LoginPage from "../../interface/pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import WebTaskPage from "../../interface/pages/WebTaskPage";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/web-task" element={<WebTaskPage />} />
      </Routes>
    </div>
  );
};

export default Router;
