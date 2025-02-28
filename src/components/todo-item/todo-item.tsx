import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./todo-item.module.scss";

interface TodoItemProps {
  id: number;
  title: string;
  handleDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, handleDelete }) => {
  return (
    <li className={styles.todoItem}>
      <span className={styles.text}>{title}</span>
      <DeleteIcon
        className={styles.deleteBtn}
        onClick={() => handleDelete(id)}
      />
    </li>
  );
};

export default TodoItem;
