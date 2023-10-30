import Header from "./components/header";
import TodoForm from "./components/TODOform";
import TODOS from "./components/Todos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoForm />
      <TODOS />
    </div>
  );
}

export default App;
