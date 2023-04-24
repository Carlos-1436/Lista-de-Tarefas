import "./styles/page.css";
import "./styles/list.css";
import { ItemsList, ToDoItem } from "./components/ToDoItem";
import { useState } from "react";

const App = () => {
  const [ todos, setTodos ] = useState<Array<{ name: string, completed: boolean }>>([]);
  const [ todoText, setTodoText ] = useState<string>();

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        name: todoText,
        completed: false
      }
    ]);
  }

  return (
    <>
      <div className="ListContainer">
        <div className="ListTitle">
          <h2>Lista de Tarefas</h2>
        </div>
        <div className="CreationToDo">
          <input type="text" name="todo" onChange={(e) => setTodoText(e.target.value)} placeholder="Digite a sua tarefa."/>
          <button onClick={addTodo}>Adicionar</button>
        </div>
        <ItemsList>
          {
          todos.map((todo, index) =>
            <ToDoItem
              name={todo.name}
              completed={todo.completed}
              onDelete={() => setTodos(todos.filter((_, index2) => index2 != index))}
              onComplete={() => setTodos(todos.map((td, index2) => (index2 == index) ? { name: td.name, completed: !td.completed} : td))}
            />
          )
          }
        </ItemsList>
      </div>
    </>
  );
}

export default App;