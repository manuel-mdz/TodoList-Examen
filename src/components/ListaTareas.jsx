import React from 'react';
import ObjetosTareas from './ObjetosTareas';

const ListaTareas = ({ todos, deleteTodo, editTodo }) => {
  if (todos.length === 0) {
    return <b><p>No hay tareas disponibles</p></b>;
  }

  return (
    <ul style={{ padding: 0 }}>
      {todos.map(todo => (
        <ObjetosTareas 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          editTodo={editTodo} 
        />
      ))}
    </ul>
  );
};

export default ListaTareas;
