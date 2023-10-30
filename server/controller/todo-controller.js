import todo from "../module/Todo.js";

export const addtodo = async (req, res) => {
  try {
    const newTodo = await todo.create({
      data: req.body.data,
      createdAt: Date.now(),
    });
    await newTodo.save();

    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await todo.find({}).sort({ createdAt: -1 });

    return res.status(200).json(todos);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export const updateTodo = async (req, res) => {
  try {
    await todo.findOneAndUpdate(
      { _id: req.params.id },
      { data: req.body.data }
    );

    const todos = await todo.findById(req.params.id);

    return res.status(200).json(todos);
  } catch (error) {
    return res.status(405).json(error.message);
  }
};

export const toggleTodoDone = async (req, res) => {
  try {
    const todoRef = await todo.findById(req.params.id);
    const todos = await todo.findOneAndUpdate(
      { _id: req.params.id },
      { done: !todoRef.done }
    );
    await todos.save();
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todos = await todo.findByIdAndDelete({ _id: req.params.id });
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(405).json(error.message);
  }
};
