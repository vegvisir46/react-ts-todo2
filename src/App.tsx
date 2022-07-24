import React from 'react';

import styles from './App.module.css';

const DEFAULE_TODO_LIST = [
  {id: 1, name: 'task1', description: 'description1', checked: false},
  {id: 2, name: 'task2', description: 'description2', checked: false},
  {
    id: 3, name: 'task3', description: 'description3 description3 description3 description3 description3 ' +
      'description3 description3 description3 description3 ', checked: true
  }
]

export const App = () => {
  console.log('@todos', DEFAULE_TODO_LIST);

  return (
    <div className={styles.app_container}>
      <div className={styles.container}>todo</div>
    </div>
  );
}

export default App;
