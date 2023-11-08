import { useState } from "react";
import CreateTodo from "./components/CreateToDo";
import Todo from "./components/ToDo";

function App() {
  const [todoIds, setTodoIds] = useState(2);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "🧹 청소하기",
      isDone: false,
    },
  ]);
  return (
    <main className="min-h-screen py-20 flex flex-col justify-start items-center">
      <CreateTodo
        todoIds={todoIds}
        setTodoIds={setTodoIds}
        todos={todos}
        setTodos={setTodos}
      />
      <ul className="mt-8">
        {todos.map((v, i) => (
          <Todo key={i} todo={v} index={i} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </main>
  );
}

export default App;
