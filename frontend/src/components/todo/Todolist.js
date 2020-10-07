import React from 'react';
import TodoItem from './TodoItem';

import { DivContainer, TodolistContainer } from '../../styles';

const Todolist = ({ todos }) => {
  return (
    <DivContainer>
      <TodolistContainer>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </TodolistContainer>
    </DivContainer>
  );
};

export default Todolist;
