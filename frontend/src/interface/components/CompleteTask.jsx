import React, { useState } from "react";

const CompleteTask = () => {
  const [status, setStatus] = useState(true);
  return (
    <div>
      <h3 className="h5"  style={{ fontWeight: "700",fontSize:'18px' }}>
        Complete
      </h3>
      <ul class=" w-50 ">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="form-check ">
            <input
              class="form-check-input"
              type="checkbox"
              checked={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              disabled
              id="flexCheckDefault"
            />
          </div>
          <div class="ms-2 me-auto mt-1">
            <div class="text-secondary">
              {" "}
              <p className="">Respond to Jane</p>
            </div>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="form-check ">
            <input
              class="form-check-input"
              type="checkbox"
              checked={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              disabled
              id="flexCheckDefault"
            />
          </div>
          <div class="ms-2 me-auto mt-1">
            <div class="text-secondary">
              {" "}
              <p className="">Respond to Jane</p>
            </div>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="form-check ">
            <input
              class="form-check-input"
              type="checkbox"
              checked={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              disabled
              id="flexCheckDefault"
            />
          </div>
          <div class="ms-2 me-auto mt-1">
            <div class="text-secondary">
              {" "}
              <p className="">Respond to Jane</p>
            </div>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="form-check ">
            <input
              class="form-check-input"
              type="checkbox"
              checked={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              disabled
              id="flexCheckDefault"
            />
          </div>
          <div class="ms-2 me-auto mt-1">
            <div class="text-secondary">
              {" "}
              <p className="">Respond to Jane</p>
            </div>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="form-check ">
            <input
              class="form-check-input"
              type="checkbox"
              checked={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              disabled
              id="flexCheckDefault"
            />
          </div>
          <div class="ms-2 me-auto mt-1">
            <div class="text-secondary">
              {" "}
              <p className="">Respond to Jane</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CompleteTask;
