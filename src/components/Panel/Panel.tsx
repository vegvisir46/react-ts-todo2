import React from 'react';

import styles from './Panel.module.css';
import {Button} from "../Button/Button";
import {Todo} from "../../../../react-ts-todo/src/App";

const DEFAULT_TODO = {
  name: '',
  description: ''
};

interface PanelProps {
  addTodo: ({name, description}: Omit<Todo, 'id' | 'checked'>) => void;
}

export const Panel: React.FC<PanelProps> = ({addTodo}) => {
  const [todo, setTodo] = React.useState(DEFAULT_TODO);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    console.log(event.target);
    setTodo({...todo, [name]: value});
  };

  const onClick = () => {
    addTodo({name: todo.name, description: todo.description});
    setTodo(DEFAULT_TODO);
  }


  return (
    <div className={styles.todo_panel_container}>
      <div className={styles.fields_container}>
        <div className={styles.field_container}>
          <label htmlFor="name">
            <div>Name</div>
            <input id='name' name='name' onChange={onChange} value={todo.name} type="text"/>
          </label>
        </div>
        <div className={styles.field_container}>
          <label htmlFor="name">
            <div>Description</div>
            <input id='description' name='description' onChange={onChange} value={todo.description} type="text"/>
          </label>
        </div>
      </div>
      <div className={styles.button_container}>
        <Button onClick={onClick} color='blue'>
          ADD
        </Button>
      </div>
    </div>
  )
};