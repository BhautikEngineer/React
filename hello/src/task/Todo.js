import React, { useState } from 'react';
import './todo.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleAddTodo = () => {
    if (todoInput.trim() === '') return;
    setTodos([...todos, { text: todoInput.trim(), completed: false }]);
    setTodoInput('');
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleToggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="Todo">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={todo.completed ? 'completed' : ''}
            onClick={() => handleToggleTodo(index)}
          >
            <span>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
