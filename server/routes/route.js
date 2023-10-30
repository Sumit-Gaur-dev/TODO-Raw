import express from "express";
import {
  addtodo,
  getAllTodos,
  toggleTodoDone,
  updateTodo,
  deleteTodo,
} from "../controller/todo-controller.js";

const route = express.Router();

route.post("/todos", addtodo); //geting data form TODOform
route.get("/todos", getAllTodos);
route.get("/todos/:id", toggleTodoDone);
route.put("/todos/:id", updateTodo);
route.delete("/todos/:id", deleteTodo);

export default route;
