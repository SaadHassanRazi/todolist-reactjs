import React, { useEffect, useState } from "react";
import { ClockFill } from "react-bootstrap-icons";
import { useTodo } from "../../useCases/context/TodoContext";
import "./css/global.css";

const IncompleteTask = () => {
  const { todoData, changeTaskStatus } = useTodo();

  const changeTaskStatusHandler = (id, status) => {
    const taskData = {
      id,
      status,
    };
    changeTaskStatus(taskData);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      day: "numeric",
      month: "short",

      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // For AM/PM format
    });
  };

  return (
    <div className="pt-4 ">
      <h3 className="h5" style={{ fontWeight: "700", fontSize: "18px" }}>
        Incomplete
      </h3>
      <ul class="w-50 ">
        {todoData.map((item, index) => {
          if (!item.status) {
            return (
              <li
                class="list-group-item d-flex justify-content-between align-items-start"
                key={item.id}
              >
                <div class="form-check">
                  <input
                    className="form-check-input"
                    style={{ accentColor: "black" }}
                    type="checkbox"
                    id="flexCheckDefault"
                    checked={item.status}
                    onChange={(e) => {
                      changeTaskStatusHandler(item.id, e.target.checked);
                    }}
                  />
                  <div class="ms-2 me-auto">
                    <p className="">{item.todo}</p>
                    <div style={{ position: "relative", bottom: "12px" }}>
                      {" "}
                      <ClockFill style={{ fontSize: "14px" }} />
                      <span
                        className="text-secondary "
                        style={{ fontSize: "14px", fontWeight: 600 }}
                      >
                        {" "}
                        {formatDate(item.date)}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default IncompleteTask;
