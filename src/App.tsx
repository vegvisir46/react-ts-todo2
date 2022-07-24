import React from 'react';

import styles from './App.module.css';
import {Header} from "./components/Header/Header";

const DEFAULE_TODO_LIST = [
  {id: 1, name: 'task1', description: 'description1', checked: false},
  {id: 2, name: 'task2', description: 'description2', checked: false},
  {
    id: 3, name: 'task3', description: 'description3 description3 description3 description3 description3 ' +
      'description3 description3 description3 description3 ', checked: true
  }
]

export const App = () => {
  const [todos, setTodos] = React.useState(DEFAULE_TODO_LIST);
  const todoCounter: number = DEFAULE_TODO_LIST.length;
  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header todoCounter={todoCounter}/>
      </div>
    </div>
  );
}

export default App;
