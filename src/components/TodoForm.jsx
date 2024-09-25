import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Agregar Tarea" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default TodoForm;
