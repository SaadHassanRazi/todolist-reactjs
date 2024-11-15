import React, { useState } from "react";
import { BoxArrowRight, ClipboardData, GeoAlt } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useAuth } from "../../useCases/context/AuthContext";
import "./css/global.css";

const Sidebar = () => {
  const [activeId, setActiveId] = useState(1);
  const { logout } = useAuth();

  const sideNav = [
    {
      id: 1,
      name: "Task",
      icon: <ClipboardData />,
      path: "/webtask",
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
                activeId === item.id ? "bg-black text-white" : "text-dark"
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
      <button
        type="button"
        className="nav-link mt-auto ms-3 text-dark"
        onClick={logout}
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
      </button>
    </div>
  );
};

export default Sidebar;
