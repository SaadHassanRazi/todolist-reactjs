import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { axiosInstance } from "./axiosInstance";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const [token, setToken] = useState(localStorage.getItem("site") || null);
  const navigate = useNavigate();
  const loginAction = async (data) => {
    try {
      const response = await axiosInstance.get("/api/users");
      const users = await response.data;
      console.log(users);

      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (user) {
        setUser(user.email);
        setToken(user.token);
        localStorage.setItem("user", user.email); // Corrected usage
        localStorage.setItem("site", user.token);
        navigate("/web-task");
        return;
      }
      throw new Error("Invalid credentials or role");
    } catch (error) {
      console.error("Login action error:", error);
      alert("Login failed: " + error.message);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, loginAction, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
