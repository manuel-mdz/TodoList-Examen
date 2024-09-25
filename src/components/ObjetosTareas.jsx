import React, { useState } from 'react';

const ObjetosTareas = ({ todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      {isEditing ? (
        <input 
          type="text" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)} 
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Borrar</button>
      <button onClick={handleEdit}>
        {isEditing ? 'Guardar' : 'Editar'}
      </button>
    </li>
  );
};

export default ObjetosTareas;
