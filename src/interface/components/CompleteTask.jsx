import React from "react";

const CompleteTask = () => {
  return (
    <div>
      <h2>Completed</h2>
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
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CompleteTask;
