import React, { useState , useRef , useEffect } from 'react';
import './App.css';
import TodoList from './TodoList.js';
import { v4 as uuid } from 'uuid';


const LOCAL_STORAGE_KEY = 'todoApp.todos';
function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect( () => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return
    setTodos(prevTodos => {
      return [ ...prevTodos, { id: uuid(), name: name, completed: false}];
    })
    todoNameRef.current.value = null;
  }

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find( todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref = { todoNameRef } type="text" />
      <button onClick = {handleAddTodo}>Add Todo</button>
      <button onClick = {handleClearTodos}>Clear Completed Todos</button>
      <div>{todos.filter(todo => todo.completed === false).length} left to do</div>
    </>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
