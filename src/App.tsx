import { useState } from "react";
import { useTodoStore } from "./TodoStore";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();


  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-semibold font-mono">Todo List</h1>
      <br />
      <div className="flex justify-center">
        <input
          type="text"
          className="border-2 border-gray-300 p-2 rounded-lg"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-lg ml-2"
          onClick={() => {
            addTodo(todoText);
            setTodoText("");
          }}
        >Add Item </button>
      </div>

      <div className="mt-4 container mx-auto w-96">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center border-2 border-gray-300 p-2 rounded-lg mt-2" >
            <div className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
              {todo.description}
            </div>
            <div>
              <button
                className="bg-green-500 text-white p-2 rounded-lg"
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded-lg ml-2"
                onClick={() => removeTodo(todo.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default App;