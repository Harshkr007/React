import { useEffect, useState } from "react";
import { TodoContextProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // [todo,...todos]
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, newtodo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? newtodo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id != id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoKey"));
    if (todoList && todoList.length > 0) {
      setTodos(todoList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoKey", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoContextProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <TodoForm />
              {/* Todo form goes here */}
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todos.map((todo) => {
                return (
                  <div key={todo.id} className="w-full">
                    <TodoItem todo={todo} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
