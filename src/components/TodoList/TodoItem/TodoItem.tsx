import React from 'react';

import styles from './TodoItem.module.css';
import {Button} from "../../Button/Button";
import {Todo} from "../../../../../react-ts-todo/src/App";

interface TodoItemProps {
  todo: Todo;
  checkTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
}


export const TodoItem: React.FC<TodoItemProps> = ({todo, checkTodo, deleteTodo}) => {
  return (
    <div className={styles.todo_item_container}>
      <div style={{
        opacity: todo.checked ? 0.5 : 1,
        textDecoration: todo.checked ? 'line-through' : 'none',
      }}>
        <div aria-hidden
             className={styles.todo_item_title}
             onClick={() => checkTodo(todo.id)}
        >
          {todo.name}
        </div>
        <div aria-hidden className={styles.todo_item_description}>
          {todo.description}
        </div>
      </div>
      <div className={styles.todo_item_button_container}>
        <Button color={'orange'}>EDIT</Button>
        <Button color={'red'} onClick={() => deleteTodo(todo.id)}>DELETE</Button>
      </div>
    </div>
  )
};