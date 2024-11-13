import React, { useState } from "react";
import { Clipboard, Map, SignDeadEnd } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeId, setActiveId] = useState(1);

  const sideNav = [
    {
      id: 1,
      name: "Task",
      icon: <Clipboard />,
      path: "/web-task",
    },
    {
      id: 2,
      name: "Location",
      icon: <Map />,
      path: "/location",
    },
  ];

  const handleClick = (id) => {
    setActiveId(id);
  };

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ background: "#f5f8fc" }}
    >
      <ul className="nav flex-column py-5">
        {sideNav.map((item) => (
          <li className="nav-item" key={item.id}>
            <Link
              to={item.path}
              className={`nav-link rounded-2 w-75 ${
                activeId === item.id ? "bg-dark text-white" : "text-dark"
              }`}
              onClick={() => handleClick(item.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center gap-2">
                <div className="h3 mb-0">{item.icon}</div>
                {/* Hide text on screens smaller than md */}
                <div className="h4 mb-0 d-none d-md-block">{item.name}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className="nav-link mt-auto text-dark"
        to={"/login"}
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex align-items-center gap-2">
          <div className="h3 mb-0">
            <SignDeadEnd />
          </div>
          {/* Hide "Sign Out" text on screens smaller than md */}
          <div className="h4 mb-0 d-none d-md-block">Sign Out</div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
