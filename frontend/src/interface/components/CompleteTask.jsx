import React, { useState } from "react";
import { useTodo } from "../../useCases/context/TodoContext";

const CompleteTask = () => {
  const { todoData, changeTaskStatus } = useTodo();
  const changeTaskStatusHandler = (id, status) => {
    const taskData = {
      id,
      status,
    };

    changeTaskStatus(taskData);
  };

  return (
    <div>
      <h3 className="h5" style={{ fontWeight: "700", fontSize: "18px" }}>
        Complete
      </h3>
      <ul class=" w-50 ">
        {todoData.map((item, index) => {
          if (item.status) {
            return (
              <>
                <li
                  class="list-group-item d-flex justify-content-between align-items-start"
                  key={item.id}
                >
                  <div class="form-check ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked={item.status}
                      onChange={(e) => {
                        changeTaskStatusHandler(item.id, e.target.checked);
                      }}
                      id="flexCheckDefault"
                    />
                  </div>
                  <div class="ms-2 me-auto mt-1">
                    <div class="text-secondary">
                      {" "}
                      <p className="">{item.todo}</p>
                    </div>
                  </div>
                </li>
              </>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default CompleteTask;
