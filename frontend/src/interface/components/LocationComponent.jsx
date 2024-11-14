import React from "react";
import { ArrowBarLeft, BroadcastPin, ClockFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const LocationComponent = () => {
  return (
    <div>
      <Link
        className="btn btn-transparent"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <span
          className="font-weight-bold"
          style={{ fontWeight: "700", fontSize: "18px" }}
        >
          + Check In
        </span>
      </Link>
      <div className="pt-4 ">
        <h3 className="h5" style={{ fontWeight: "700", fontSize: "18px" }}>
          Current Location
        </h3>
        <ul class="w-50 ">
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
            style={{ lineHeight: "15px" }}
          >
            <div class="">
              <BroadcastPin style={{ fontSize: "18px" }} />
            </div>
            <div class="ms-2 me-auto">
              <p className="font-weight-bold">Lahore,Pakistan,SE</p>

              <span className="text-secondary" style={{ fontSize: "14px" }}>
                59.3293 E
              </span>
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
        <h3 className="h5 pt-3" style={{ fontWeight: "700", fontSize: "18px" }}>
          Previous Location
        </h3>
        <ul class="w-50 ">
          <li
            class="list-group-item d-flex justify-content-between align-items-start my-3"
            style={{ lineHeight: "15px" }}
          >
            <div class="">
              <BroadcastPin style={{ fontSize: "18px" }} />
            </div>
            <div class="ms-2 me-auto">
              <p className="font-weight-bold">Lahore,Pakistan,SE</p>

              <span className="text-secondary" style={{ fontSize: "14px" }}>
                59.3293 E
              </span>
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start my-3"
            style={{ lineHeight: "15px" }}
          >
            <div class="">
              <BroadcastPin style={{ fontSize: "18px" }} />
            </div>
            <div class="ms-2 me-auto">
              <p className="font-weight-bold">Lahore,Pakistan,SE</p>

              <span className="text-secondary" style={{ fontSize: "14px" }}>
                59.3293 E
              </span>
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start my-3"
            style={{ lineHeight: "15px" }}
          >
            <div class="">
              <BroadcastPin style={{ fontSize: "18px" }} />
            </div>
            <div class="ms-2 me-auto">
              <p className="font-weight-bold">Lahore,Pakistan,SE</p>

              <span className="text-secondary" style={{ fontSize: "14px" }}>
                59.3293 E
              </span>
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start my-3"
            style={{ lineHeight: "15px" }}
          >
            <div class="">
              <BroadcastPin style={{ fontSize: "18px" }} />
            </div>
            <div class="ms-2 me-auto">
              <p className="font-weight-bold">Lahore,Pakistan,SE</p>

              <span className="text-secondary " style={{ fontSize: "14px" }}>
                59.3293 E
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LocationComponent;
