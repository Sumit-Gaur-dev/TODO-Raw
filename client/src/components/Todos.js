import { useEffect } from "react";
import { getAllTodos } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";

const TODOS = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <article>
      <ul>
        {todos.map((todos) => {
          return <Todo todo={todos} key={todos} />;
        })}
      </ul>
    </article>
  );
};
export default TODOS;
