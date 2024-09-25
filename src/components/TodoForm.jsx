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
        placeholder="Agregar tarea" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button type="submit">agregar</button>
    </form>
  );
};

export default TodoForm;
