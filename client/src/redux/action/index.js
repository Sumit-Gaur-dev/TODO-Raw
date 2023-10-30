import axios from "axios";
import {
  ADDNEW_TODO,
  GETALL_TODOS,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from "./type"; // action at the back
const API_URL = "http://localhost:8000";

// used in TODOform for saving new todo
export const addMoreTodos = (data) => async (disaptch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    disaptch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log(`error while calling add new todo ${error.message}`);
  }
};

//used in Todo.js for fetching all the todo
export const getAllTodos = () => async (disaptch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);
    disaptch({ type: GETALL_TODOS, payload: res.data });
  } catch (error) {
    console.log(`error while calling get all new todo ${error.message}`);
  }
};

export const toggleTodo = (id) => async (disaptch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);
    disaptch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log(`error while calling get all new todo ${error.message}`);
  }
};

// these fieldl get payload form the back
export const updateTodo = (id, data) => async (disaptch) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}`, { data });
    disaptch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log(`error while calling get all new todo ${error.message}`);
  }
};

export const deleteTODO = (id) => async (disaptch) => {
  try {
    const res = await axios.delete(`${API_URL}/todos/${id}`);
    disaptch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log(`error while calling get all new todo ${error.message}`);
  }
};
