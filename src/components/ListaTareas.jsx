import React from 'react';
import TodoItem from './ObjetosTareas';

const ListaTareas = ({ todos, deleteTodo, editTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
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
