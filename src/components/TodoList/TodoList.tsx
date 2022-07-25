import React from 'react';
import {TodoItem} from "./TodoItem/TodoItem";

interface TodoListProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({todos}) => {
  return (
    <div>
      {todos.map(todo => {
        return (<TodoItem todo={todo}/>)
      })}
    </div>
  )
};