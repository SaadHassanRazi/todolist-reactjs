const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    methods: "GET,POST", // Specify allowed methods
    credentials: true, // Include credentials if needed
  })
);
let todoList = [
  {
    id: 1,
    todo: "Go to Gym",
    status: false,
    date: "2024-11-13T13:00:00",
    // ISO 8601 format
  },
  {
    id: 2,
    todo: "Respond to Jane",
    status: true,
    date: "2024-11-13T13:00:00",
    // ISO 8601 format
  },
  {
    id: 3,
    todo: "Times up",
    status: false,
    date: "2024-11-14T12:24:00",
    // ISO 8601 format
  },
];

// GET: Retrieve the list of todos
app.get("/api/todos", (req, res) => {
  res.json(todoList);
});

// POST: Add a new todo to the list
app.post("/api/todos", (req, res) => {
  const { todo, status, date } = req.body;

  // Validation to ensure all fields are provided
  if (!todo || status === undefined || !date) {
    return res.status(400).json({
      message: "Please provide all required fields: todo, status, date.",
    });
  }

  const newTodo = {
    id: todoList.length + 1,
    todo,
    status,
    date,
  };

  todoList.push(newTodo);
  res.status(201).json(newTodo);
});

const users = [
  { id: 1, email: "user@example.com", password: "12345678" },
  { id: 2, email: "admin@example.com", password: "admin1234" },
  { id: 3, email: "test@example.com", password: "password123" },
];

// GET: Retrieve the list of users (for demonstration purposes)
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
