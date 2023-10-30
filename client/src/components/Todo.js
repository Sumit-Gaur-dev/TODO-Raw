import { toggleTodo, updateTodo, deleteTODO } from "../redux/action/index";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";

const Todo = ({ todo }) => {
  const inputFocus = useRef();
  const dispatch = useDispatch();
  const [editting, setEdetting] = useState(false);
  const [text, setText] = useState(todo.data);

  const onFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setEdetting((state) => !state);
    dispatch(updateTodo(todo._id, text));
    console.log(text);
  };

  const onTodoToggle = () => {
    dispatch(toggleTodo(todo._id));
  };

  const onEditFileClick = (e) => {
    e.stopPropagation();
    setEdetting((state) => !state);
    console.log(inputFocus);
  };
  const onTrashClick = (e) => {
    e.stopPropagation();
    dispatch(deleteTODO(todo._id));
  };
  return (
    <li
      className="task"
      onClick={onTodoToggle}
      style={{
        textDecoration: todo.done ? "line-through" : "",
        color: todo.done ? "black" : "#34495e",
      }}
    >
      <span style={{ display: editting ? "none" : "" }}>{todo.data}</span>

      <form
        style={{ display: editting ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          ref={inputFocus}
          className="edit-todo"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </form>

      <span className="icon" onClick={onTrashClick}>
        <i className="fa fa-trash" />
      </span>

      <span className="icon" onClick={onEditFileClick}>
        <i class="fa fa-file" />
      </span>
    </li>
  );
};

export default Todo;
