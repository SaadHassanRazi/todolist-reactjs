import React, { useState } from "react";

import { useAuth } from "../../useCases/context/AuthContext";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginAction } = useAuth();
  const userData = {
    email,
    password,
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    loginAction(userData);
  };
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <form onSubmit={submitHandler}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button
            type="submit"
            className="btn btn-dark rounded-pill w-100 py-2"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
