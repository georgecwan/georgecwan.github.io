import React from 'react';
import Todo from './Todo.js';

export default function TodoList({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
      return <Todo toggleTodo = {toggleTodo} key={todo.id} todo={todo}/>;
    })
  );
}
