import React from "react";
import { ClockFill } from "react-bootstrap-icons";

const IncompleteTask = () => {
  return (
    <div>
      <h2>Incomplete Task</h2>
      <ul class="list-group w-50 ">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div class="ms-2 me-auto">
            <div class="fw-bold">Subheading</div>
            <ClockFill /> Content for list item
          </div>
        </li>
      </ul>
    </div>
  );
};

export default IncompleteTask;
