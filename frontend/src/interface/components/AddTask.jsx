import React, { useState } from "react";
import {
  BlockquoteLeft,
  BlockquoteRight,
  ChatDots,
  Clock,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./css/addTask.css";
import { v4 } from "uuid";
import { useTodo } from "../../useCases/context/TodoContext";

const AddTask = () => {
  const [todo, setTodo] = useState("");
  const [status, setStatus] = useState(false);
  const [dateTime, setDateTime] = useState("");
  const { addTodoData } = useTodo();

  const userData = {
    id: v4(),
    todo,
    status,
    date: dateTime,
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    addTodoData(userData);

    setTodo("");
    setStatus(false);
    setDateTime("");
  };

  return (
    <div>
      <Link
        className="btn btn-transparent"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <span
          className="font-weight-bold"
          style={{ fontWeight: "700", fontSize: "18px" }}
        >
          + Add New Task
        </span>
      </Link>
      {/* Modal Start */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style={{ maxWidth: "765px" }}>
          <div class="modal-content" style={{ height: "501px" }}>
            <div class="modal-body">
              <h1
                class="modal-title fs-5 pt-4 ps-3"
                style={{ fontSize: "20px", fontWeight: "600" }}
                id="exampleModalLabel"
              >
                New Task
              </h1>
              <form
                onSubmit={submitHandler}
                style={{ width: "626px", height: "248px" }}
                className="p-4 mx-auto"
              >
                <div class="input-group mb-3">
                  <span class="border-bottom" id="basic-addon1">
                    <ChatDots className="h4 me-1" />
                  </span>
                  <input
                    type="text"
                    class="form-control no-border border-bottom pb-3"
                    placeholder="Summary"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="border-bottom" id="basic-addon1">
                    <BlockquoteRight className="h4 me-1" />
                  </span>
                  <textarea
                    type="text"
                    class="form-control no-border border-bottom"
                    placeholder="Description"
                    rows={5}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="border-bottom" id="basic-addon1">
                    <Clock className="h4 me-1" />
                  </span>
                  <input
                    type="datetime-local"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    class="form-control no-border border-bottom pb-3"
                    placeholder="Due Date"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-dark d-flex mx-auto justify-content-center rounded-pill   w-75"
                  style={{ height: "51px", width: "348px", padding: "11px 0" }}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn d-flex mx-auto justify-content-center rounded-pill py-2  w-75"
                  style={{ fontWeight: "bold" }}
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal End */}
    </div>
  );
};

export default AddTask;
