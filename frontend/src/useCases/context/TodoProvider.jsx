import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";
import { axiosInstance } from "./axiosInstance";
export const TodoProvider = ({ children }) => {
  const [todoData, setTodoData] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoStatus, setTodoStatus] = useState(null);
  const [todoTime, setTodoTime] = useState(null);

  const getTodoData = async () => {
    try {
      const response = await axiosInstance.get("/api/todos");
      const data = await response.data;
      setTodoData(data);
    } catch (error) {
      console.error("Error Finding Data", error);
    }
  };

  useEffect(() => {
    getTodoData();
  }, []);
  console.log(todoData);

  return (
    <TodoContext.Provider value={{ todoData }}>{children}</TodoContext.Provider>
  );
};

