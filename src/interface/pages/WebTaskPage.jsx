import React from "react";
import Sidebar from "../components/Sidebar";
import WebTask from "../components/WebTask";

const WebTaskPage = () => {
  return (
    <div className="row mx-auto">
      <div className="col-2 col-md-3 border">
        <Sidebar />
      </div>
      <div className="col border">
        <WebTask />
      </div>
    </div>
  );
};

export default WebTaskPage;
