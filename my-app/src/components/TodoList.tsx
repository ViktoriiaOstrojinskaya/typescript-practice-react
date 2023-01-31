import React from "react";
import { IItem } from "./types/todo";

interface IProps {
  todos: IItem[];
  onRemoveTodo: (id: string) => void;
}

const TodoList: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.todos.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <button onClick={props.onRemoveTodo.bind(this, item.id)}>
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
