import React, { useState } from "react";
import {
  BoxArrowRight,
  Clipboard,
  ClipboardData,
  ClipboardDataFill,
  GeoAlt,
  Map,
  SignDeadEnd,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeId, setActiveId] = useState(1);

  const sideNav = [
    {
      id: 1,
      name: "Task",
      icon: <ClipboardData />,
      path: "/web-task",
    },
    {
      id: 2,
      name: "Location",
      icon: <GeoAlt />,
      path: "/location",
    },
  ];

  const handleClick = (id) => {
    setActiveId(id);
  };

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ overflowX: "hidden" }}
    >
      <ul className="nav flex-column py-5">
        {sideNav.map((item) => (
          <li className="nav-item" key={item.id}>
            <Link
              to={item.path}
              className={`nav-link  ${
                activeId === item.id ? "bg-dark text-white" : "text-dark"
              }`}
              onClick={() => handleClick(item.id)}
              style={{
                cursor: "pointer",
                width: "250px",

                height: "55px",
                borderTopRightRadius: "25px",
                borderBottomRightRadius: "25px",
              }}
            >
              <div
                className="d-flex  align-items-center gap-3"
                style={{ width: "80px" }}
              >
                <div className="h4">{item.icon}</div>

                <div
                  className=" mb-0 d-none d-md-block"
                  style={{ fontWeight: "700", fontSize: "18px" }}
                >
                  {item.name}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className="nav-link mt-auto ms-3 text-dark"
        to={"/login"}
        style={{
          cursor: "pointer",
          width: "250px",

          height: "55px",
          borderTopRightRadius: "25px",
          borderBottomRightRadius: "25px",
        }}
      >
        <div className="d-flex align-items-center gap-4">
          <div className="h4 mb-0">
            <BoxArrowRight />
          </div>

          <div
            className=" mb-0 d-none d-md-block"
            style={{ fontWeight: "700", fontSize: "18px" }}
          >
            Logout
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
