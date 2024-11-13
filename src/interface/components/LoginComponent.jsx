import React from "react";

const LoginComponent = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <form>
        <div
          className="mx-auto border rounded shadow p-4"
          style={{ height: "296px", width: "343px" }}
        >
          <h2 className="text-center mb-4">Login</h2>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary rounded-pill w-100 py-2"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
