import React, { useState } from "react";
import { BlockquoteRight, ChatDots, Clock } from "react-bootstrap-icons";
import { v4 } from "uuid";
import "./css/addTask.css";
import { useTodo } from "../../useCases/context/TodoContext";

import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BasicDateTimePicker from "./DateTimePicker";

const AddTask = () => {
  const [todo, setTodo] = useState("");
  const [status, setStatus] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const { addTodoData } = useTodo();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userData = {
    id: v4(),
    todo,
    status,
    date: dateTime ? dateTime.format() : "No due date",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userData);

    addTodoData(userData);

    setTodo("");
    setStatus(false);
    setDateTime(null);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="btn btn"
        style={{ fontWeight: "700", fontSize: "18px" }}
      >
        + Add New Task
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        PaperProps={{
          style: {
            width: "765px",
            height: "501px",
            maxWidth: "none",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: "600px", fontSize: "20px" }}>
          New Task
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={submitHandler}
            style={{ width: "100%", height: "100%" }}
            className="p-4 mx-auto"
          >
            <div className="input-group mb-3">
              <span className="border-bottom" id="basic-addon1">
                <ChatDots className="h4 me-1" />
              </span>
              <input
                type="text"
                className="form-control no-border border-bottom pb-3"
                placeholder="Summary"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="border-bottom" id="basic-addon1">
                <BlockquoteRight className="h4 me-1" />
              </span>
              <textarea
                type="text"
                className="form-control no-border border-bottom"
                placeholder="Description"
                rows={5}
                aria-label="Description"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="border-bottom" id="basic-addon1">
                <Clock
                  className="h4 me-1"
                  style={{ position: "relative", top: "20px" }}
                />
              </span>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <BasicDateTimePicker
                  onchange={(newValue) => setDateTime(newValue || "")}
                  value={dateTime}
                />
              </LocalizationProvider>
            </div>

            <button
              type="submit"
              className="btn btn-dark d-flex mx-auto justify-content-center rounded-pill"
              style={{
                height: "51px",
                width: "348px",
                padding: "11px 0",
                background: "#000000",
              }}
            >
              Save
            </button>
            <button
              type="button"
              className="btn d-flex mx-auto justify-content-center rounded-pill mt-4 w-75"
              style={{ fontWeight: "bold" }}
              onClick={handleClose}
            >
              Cancel
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTask;
