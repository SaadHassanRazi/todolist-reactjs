import React from "react";
import { ClockFill } from "react-bootstrap-icons";
import IncompleteTask from "./IncompleteTask";
import CompleteTask from "./CompleteTask";
import AddTask from "./AddTask";

const WebTask = () => {
  return (
    <div>
      <div className="container">
        <AddTask />
        <IncompleteTask />
        <CompleteTask />
      </div>
    </div>
  );
};

export default WebTask;
