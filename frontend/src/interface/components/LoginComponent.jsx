import React from "react";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <form>
        <div
          className="mx-auto  p-4"
          style={{ height: "296px", width: "343px" }}
        >
          <h2
            className="text-center mb-4"
            style={{ fontWeight: "600", fontSize: "30px" }}
          >
            Log In
          </h2>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              style={{ background: "#ededed", height: "50px" }}
              placeholder="Email"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              style={{ background: "#ededed", height: "50px" }}
              placeholder="Password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <Link
            to={"/web-task"}
            type="submit"
            className="btn btn-dark rounded-pill w-100 py-2"
          >
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
