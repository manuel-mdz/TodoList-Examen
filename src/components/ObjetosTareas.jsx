import React, { useState } from 'react';

const ObjetosTareas = ({ todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <input 
          type="text" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)} 
          style={{ marginRight: '10px' }} // Añadido espaciado
        />
      ) : (
        <span style={{ color: '#343a40', fontSize: '16px' }}>{todo.text}</span>
      )}
      <button className="edit-btn" onClick={handleEdit}>
        <i className={isEditing ? 'fas fa-save' : 'fas fa-pencil-alt'}></i>
      </button>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </li>
  );
};

export default ObjetosTareas;
