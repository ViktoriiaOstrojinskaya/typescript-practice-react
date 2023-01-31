import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { IItem } from "./components/types/todo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);

  function TodoAddHandler(todo: IItem): void {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random().toString(),
          title: todo.title,
        },
      ];
    });
  }

  function TodoRemoveHandler(id: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <div className="App">
      <AddTodo onAddTodo={TodoAddHandler} />
      <TodoList onRemoveTodo={TodoRemoveHandler} todos={todos} />
    </div>
  );
};

export default App;
