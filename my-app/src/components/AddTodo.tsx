import React, { useState } from "react";
import { IItem } from "./types/todo";

interface IProps {
  onAddTodo: (todo: IItem) => void;
}

type OnlyTitle = Pick<IItem, "title">;

const AddTodo: React.FC<IProps> = (props) => {
  const [todo, titleTodo] = useState<Partial<OnlyTitle>>({});

  function handleTitle(event: React.ChangeEvent<HTMLInputElement>) {
    titleTodo({
      title: event.target.value,
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!todo.title) {
      return;
    }
    props.onAddTodo(todo as IItem);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span>Add title</span>
        <input type="text" id="add-todo" onChange={handleTitle} />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodo;
