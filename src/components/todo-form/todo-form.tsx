import React, { ChangeEvent, FormEvent } from "react";
import { Button } from "@mui/material";
import styles from "./todo-form.module.scss";

interface TodoFormProps {
  title: string;
  setTitle: (title: string) => void;
  handleSubmit: (event: FormEvent) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  title,
  setTitle,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.todoForm} role="form">
      <div className={styles.formControl}>
        <label htmlFor="title" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          className={styles.input}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
        />
      </div>
      <Button variant="contained" type="submit" className={styles.button}>
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
