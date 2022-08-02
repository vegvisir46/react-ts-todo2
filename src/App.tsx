import React from 'react';

import styles from './App.module.css';
import {Header} from "./components/Header/Header";
import {Panel} from "./components/Panel/Panel";
import {Todo} from "../../react-ts-todo/src/App";
import {TodoList} from "./components/TodoList/TodoList";

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

  const addTodo = ({name, description}: Omit<Todo, 'id' | 'checked'>) => {
    setTodos([...todos, {id: todos[todos.length - 1].id + 1, description, name, checked: false}]);
  };

  const checkTodo = (id: Todo['id']) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {...todo, checked: !todo.checked}
      }
      return todo;
    }))
  };

  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header todoCounter={todos.length}/>
        <Panel addTodo={addTodo}/>
        <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
      </div>
    </div>
  );
}

export default App;
