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
            className="text-center ms-4"
            style={{
              fontWeight: "600",
              fontSize: "30px",
              marginBottom: "36px",
              color: "#000000",
            }}
          >
            Log In
          </h2>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                background: "#F6F6F6",
                height: "50px",
                borderRadius: "8px",
                width: "343px",
                height: "50px",
              }}
              placeholder="Email"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3 ">
            <input
              type="password"
              style={{
                background: "#F6F6F6",
                height: "50px",
                borderRadius: "8px",
                width: "343px",
                height: "50px",
              }}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
            />
            <button 
              style={{
                fontSize: "16px",
                color: "#000000",
                position: "relative",
                bottom: "45px",
                left: "20px",
                fontWeight: "500",
              }}
              className="float-end btn cursor-pointer"
            >
              Show
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-dark  py-2"
            style={{
              background: "#000000",
              borderRadius: "100px",
              width: "343px",
              height: "51px",
            }}
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
