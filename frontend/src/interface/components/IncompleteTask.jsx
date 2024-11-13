import React, { useState } from "react";
import { ClockFill } from "react-bootstrap-icons";
import { useTodo } from "../../useCases/context/TodoContext";
import "./css/global.css";

const IncompleteTask = () => {
  const { todoData } = useTodo();

  return (
    <div className="pt-4 ">
      <h3 className="h5" style={{ fontWeight: "700",fontSize:'18px' }}>
        Incomplete
      </h3>
      <ul class="w-50 ">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="form-check">
            <input
              className="form-check-input"
              style={{ accentColor: "black" }}
              type="checkbox"
              id="flexCheckDefault"
            />
            <div class="ms-2 me-auto">
              <p className="">Submit My Resume</p>
              <div style={{ position: "relative", bottom: "12px" }}>
                {" "}
                <ClockFill className="" />
                <span className="text-secondary px-1">Today, 17:00</span>
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="form-check">
            <input
              className="form-check-input"
              style={{ accentColor: "black" }}
              type="checkbox"
              id="flexCheckDefault"
            />
            <div class="ms-2 me-auto">
              <p className="">Submit My Resume</p>
              <div style={{ position: "relative", bottom: "12px" }}>
                {" "}
                <ClockFill className="" />
                <span className="text-secondary px-1">Today, 17:00</span>
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="form-check">
            <input
              className="form-check-input"
              style={{ accentColor: "black" }}
              type="checkbox"
              id="flexCheckDefault"
            />
            <div class="ms-2 me-auto">
              <p className="">Submit My Resume</p>
              <div style={{ position: "relative", bottom: "12px" }}>
                {" "}
                <ClockFill className="" />
                <span className="text-secondary px-1">Today, 17:00</span>
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="form-check">
            <input
              className="form-check-input"
              style={{ accentColor: "black" }}
              type="checkbox"
              id="flexCheckDefault"
            />
            <div class="ms-2 me-auto">
              <p className="">Submit My Resume</p>
              <div style={{ position: "relative", bottom: "12px" }}>
                {" "}
                <ClockFill className="" />
                <span className="text-secondary px-1">Today, 17:00</span>
              </div>
            </div>
          </div>
        </li>
      </ul>

      {/* <ul class="list-group w-50 ">
        {todoData.map((item, index) => {
          return (
            <li
              class="list-group-item d-flex justify-content-between align-items-start"
              key={item.id}
            >
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div class="ms-2 me-auto">
                <div class="fw-bold">{item.todo}</div>
                <ClockFill /> {item.date}
              </div>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default IncompleteTask;
