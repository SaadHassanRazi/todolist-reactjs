import React from "react";
import { ClockFill } from "react-bootstrap-icons";
import IncompleteTask from "./IncompleteTask";
import CompleteTask from "./CompleteTask";

const WebTask = () => {
  return (
    <div>
      <div className="container">
        <button className="btn btn-primary">Add New Task</button>
        <IncompleteTask />
        <CompleteTask />
      </div>
    </div>
  );
};

export default WebTask;
