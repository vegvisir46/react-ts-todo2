import React from 'react';
import {TodoItem} from "./TodoItem/TodoItem";
import {Todo} from "../../../../react-ts-todo/src/App";

interface TodoListProps {
  todos: Todo[];
  checkTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
}

export const TodoList: React.FC<TodoListProps> = ({todos, checkTodo, deleteTodo}) => {
  return (
    <div>
      {todos.map(todo => {
        return (<TodoItem todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>)
      })}
    </div>
  )
};