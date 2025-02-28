import React, { FormEvent, useState } from "react";
import TodoForm from "../../components/todo-form/todo-form";
import TodoItem from "../../components/todo-item/todo-item";
import styles from "./todo-list.module.scss";

interface Todo {
  id: number;
  title: string;
}

const TodoList: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (title.trim() === "") return;

    setTodos([...todos, { id: Date.now(), title }]);
    setTitle("");
  };

  const handleDelete = (todoId: number) => {
    setTodos(todos.filter((todo) => todo.id !== todoId)); // ✅ Directly filter out the todo
  };

  return (
    <div className={styles.todoListContainer}>
      <h1 className={styles.title}>Add a Todo</h1>
      <TodoForm title={title} setTitle={setTitle} handleSubmit={handleSubmit} />
      <div className={styles.todoItems}>
        <h2>Todos</h2>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
