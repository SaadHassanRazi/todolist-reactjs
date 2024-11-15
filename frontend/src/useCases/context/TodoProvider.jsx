import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";
import { axiosInstance } from "./axiosInstance";
export const TodoProvider = ({ children }) => {
  const [todoData, setTodoData] = useState([]);

  const getTodoData = async () => {
    try {
      const response = await axiosInstance.get("/api/todos");
      const data = await response.data;
      setTodoData(data);
    } catch (error) {
      console.error("Error Finding Data", error);
    }
  };

  const changeTaskStatus = async (data) => {
    const updatedTodos = todoData.map((item) =>
      item.id === data.id ? { ...item, status: data.status } : item
    );

    setTodoData(updatedTodos);
  };
  const addTodoData = async (newData) => {
    try {
      const isDuplicate = todoData.find((item) => item.todo === newData.todo);
      if (isDuplicate) {
        alert("Matching Todos Found");
        return;
      }

      const response = await axiosInstance.post("/api/todos", newData);
      const data = response.data;

      setTodoData((prev) => [...prev, data]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todoData,
        changeTaskStatus,
        addTodoData,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
