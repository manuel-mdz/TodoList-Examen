import React, { useState } from 'react';
import ListaTareas from './components/ListaTareas'; // Nombre actualizado
import SearchBar from './components/SearchBar';
import TodoForm from './components/TodoForm';

import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  const filteredTodos = todos.filter(todo => 
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <TodoForm addTodo={addTodo} />
      <ListaTareas 
        todos={filteredTodos} 
        deleteTodo={deleteTodo} 
        editTodo={editTodo} 
      />
    </div>
  );
};

export default App;
