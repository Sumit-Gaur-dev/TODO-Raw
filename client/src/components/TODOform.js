import { useState } from "react"; //react
import { useDispatch } from "react-redux"; // react redux
import { addMoreTodos } from "../redux/action";

const TodoForm = () => {
  const [text, setText] = useState();

  const disaptch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    disaptch(addMoreTodos(text));
    setText("");
  };
  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="input"
        placeholder="Enter new TODO..."
        onChange={onChangeHandler}
        value={text}
      />
    </form>
  );
};

export default TodoForm;
